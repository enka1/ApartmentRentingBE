import { Building } from "../../models"

export class BuildingRepository {
   static async findAllBuildings() {
      return await Building.find()
   }
   static async findBuildingByBuildingID(buildingId) {
      return await Building.findById(buildingId)
   }
}