import { Router } from "express";
import { createApartmentMiddleware } from '../../../middlewares'
import { BuildingFactory, ApartmentFactory } from "../../../factories"
import { BuildingRepository } from "../../../repositories"

export const buildingRouter = Router();

buildingRouter.get("/", async (_, res) => {
   res.send(await BuildingRepository.findAllBuildings())
})

buildingRouter.get("/:id", async (req, res) => {
   const buildingID = req.param("id")
   res.send(await BuildingRepository.findBuildingByBuildingID(buildingID))
})

buildingRouter.post('/', async (req, res) => {
   const { address } = req.body
   if (address) {
      const newBuilding = await BuildingFactory.createNewBuilding(address)
      return res.send(newBuilding)
   }
   return res.status(400).send({
      msg: "Building Address is required!"
   })
})

buildingRouter.post("/:id/apartments", createApartmentMiddleware, async (req, res) => {
   // Add new Apartment to Building
   const buildingId = req.params.id
   const { floor, apartmentNumber, apartmentType } = req.data
   const newApartment = await ApartmentFactory.createNewApartment(floor, apartmentNumber, apartmentType, buildingId)
   return res.send(newApartment)
})