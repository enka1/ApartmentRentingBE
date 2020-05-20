import { Building } from '../../models'

export class BuildingFactory {
   static async createNewBuilding(address) {
      return await Building.create({
         address
      })
   }
}