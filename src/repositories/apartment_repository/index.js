import { Apartment, ApartmentUsedCalendar } from '../../models'

export class ApartmentRepository {

   static async findInUsedApartmentsByBuildingID(buildingID, criteria, startDate, endDate) {

      /* 
         E.g: startDate: 1/5 and endDate: 7/5
         Case 1: thời gian phòng đăng kí trước hoặc bằng startDate: 3/4 hay 1/5
      và thời gian kết thúc phải sau startDate một khoảng thời gian bất kì: 2/5, 3/5 => On Busy 
         Case 2: thời gian phòng đăng kí sau startDate và trước endDate: 29/4 hoặc 5/5 và thời gian kết thúc là
      sau endDate hay between startDate và endDate: 6/5 hay 7/7 => Busy
      */

      return await ApartmentUsedCalendar.find({
         $or: [{
            registedDate: {
               $lte: startDate
            },
            expiredDate: {
               $gt: startDate
            }
         },
         {
            registedDate: {
               $lt: endDate
            },
            expiredDate: {
               $lt: startDate,
               $gte: endDate
            }
         }
         ]
      })
         .populate({
            path: 'Apartment',
            match: {
               building: buildingID,
               ...criteria
            },
            select: '_id apartmentNumber floor building apartmentType'
         })
         .lean()
   }

   static async findAvalableAparmentByBuildingID(buildingID, startDate, endDate, criteria) {

      /* 
         Các căn hộ available là các căn hộ không có trong Schedule
      */

      let inUsedApartmentID = await this.findInUsedApartmentsByBuildingID(buildingID, criteria, startDate, endDate)
         .map(scheduledApartment => {
            return scheduledApartment.apartment._id
         })
      return await Apartment.find({
         _id: {
            $nin: inUsedApartmentID
         },
         building: buildingID
      })
         .lean()
   }

   static async findApartmentsByRenterID(renterID) {
      return await Apartment.find({
         renterID
      })
         .lean()
   }

   static async findApartmentByID(apartmentID) {
      return await Apartment.findById(apartmentID)
   }

   static async findAllApartments() {
      return await Apartment.find()
   }

   static async findApartmentByApartmentNumberAndBuildingID(apartmentNumber, buildingId) {
      const apartment = await Apartment.findOne({
         apartmentNumber: apartmentNumber,
         building: buildingId
      })
      return apartment
   }
}