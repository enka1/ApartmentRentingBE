import { ApartmentContract } from '../../models'

export class ApartmentContractRepository {
   static async findContractByContractID(contractID) {
      return await ApartmentContract.findById(contractID)
   }

   static async findApartmentContractByStatus(status) {
      return await ApartmentContract.find({
         status
      })
   } 
}