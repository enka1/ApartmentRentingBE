import moment from 'moment'
import _ from 'lodash'

export const queryApartmentMiddleware = (req, res, next) => {
    let queryData = {}
    if (req.query.startDate & req.query.endDate) {
        if (moment(req.query.startDate, 'DD-MM-YYYY').format('DD-MM-YYYY') !== req.query.startDate) {
            res.send({
                status: "error",
                message: "Date format must be DD-MM-YYYY ex: 19-09-1998"
            })
        } else {
            req.startDate = moment(req.query.startDate, 'DD-MM-YYYY')
        }

        if (moment(req.query.endDate, 'DD-MM-YYYY').format('DD-MM-YYYY') !== req.query.endDate) {
            res.send({
                status: "error",
                message: "Date format must be DD-MM-YYYY ex: 19-09-1998"
            })
        } else {
            req.endDate = moment(req.query.endDate, 'DD-MM-YYYY')
        }
    } else {
        res.send({
            message: "Request must include startTime & endTime query"
        })
    }

    if (req.query.type) {
        queryData = {
            ...queryData,
            type: req.query.type
        }
    }
    if (req.query.floor) {
        if (_.isNumber(+req.query.floor) === true) {
            queryData = {
                ...queryData,
                floor: +req.query.floor
            }
        } else {
            res.status(400).send({
                status: "error",
                message: "floor query must be numberic!"
            })
        }
    }
    req.queryData = queryData
    next()
}