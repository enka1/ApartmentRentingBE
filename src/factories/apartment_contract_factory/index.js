import moment from 'moment'

import { RenterRepository } from '../../repositories'
import { ApartmentContract, ApartmentBudget } from '../../models'
import {APARTMENT_CONTRACT_STATUS_ENUM} from '../../enums'

export class ContractFactory {
   static async createNewContract(renterId, apartmentType, registerDate, completionDate, deposit, buildingId, monthlyRentPrice) {
      let renter = await RenterRepository.findRenterById(renterId)
      if (!renter) {
         return Promise.reject(`Renter with ID:${renterId} doesn't exist in system!`)
      }
      return ApartmentContract.create({
         monthlyRentPrice,
         registerDate,
         expiredDate: moment.now().add(5, 'd'),
         deposit,
         completionDate,
         status: APARTMENT_CONTRACT_STATUS_ENUM.PENDING
      })
   }
}