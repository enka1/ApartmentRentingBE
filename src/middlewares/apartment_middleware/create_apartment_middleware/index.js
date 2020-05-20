export const createApartmentMiddleware = async (req, res, next) => {
    let data = {}

    if (req.body.floor) {
        data = {
            ...data,
            floor: +req.body.floor
        }
    } else {
        res.send({
            status: "error",
            message: "missing floor parameter"
        })
    }
    if (req.body.apartmentNumber) {
        data = {
            ...data,
            apartmentNumber: +req.body.apartmentNumber
        }
    }
    else {
        res.send({
            status: "error",
            message: "missing number parameter"
        })
    }
    if (req.body.apartmentType) {
        data = {
            ...data,
            apartmentType: req.body.apartmentType
        }
    } else {
        res.send({
            status: "error",
            message: "Missing apartment type parameter."
        })
    }
    req.data = data
    next()
}