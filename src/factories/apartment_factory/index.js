import { Apartment, Building } from "../../models";
import { ApartmentRepository } from '../../repositories'

export class ApartmentFactory {
    static async createNewApartment(floor, apartmentNumber, apartmentType, buildingID) {
        let building = await Building.findById(buildingID)
        if (building) {
            if (!await ApartmentRepository.findApartmentByApartmentNumberAndBuildingID(apartmentNumber, buildingID)) {
                const newApartment = await Apartment.create({
                    building,
                    floor,
                    apartmentNumber,
                    apartmentType
                })
                building.apartments = [...building.apartments, newApartment]
                await building.save()
                return {
                    status: "success",
                    message: "create apartment success",
                    apartment: newApartment
                }
            }
            return {
                status: "error",
                message: "Apartment number is already exist!"
            }
        } else {
            return {
                status: "error",
                message: `Not found building with ID: ${buildingID}!`
            }
        }
    }
}