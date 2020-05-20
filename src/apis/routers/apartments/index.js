import { Router } from "express";
import { ApartmentFactory } from "../../../factories";
import { ApartmentRepository } from "../../../repositories/apartment_repository";
import { queryApartmentMiddleware } from '../../../middlewares'
export const apartmentRouter = Router();

apartmentRouter.get("/", async (_, res) => {
   res.send(await ApartmentRepository.findAllApartments())
})

apartmentRouter.get("/:id", async (_, res) => {
   const apartmentID = req.param("id")
   res.send(await ApartmentRepository.findApartmentByID(apartmentID))
})

//Get available apartment by buildingId
apartmentRouter.get("/available/:id", queryApartmentMiddleware, async (_, res) => {
   const buildingId = req.param("id")
   res.send(await ApartmentRepository.findAvalableAparmentByBuildingID(buildingId, req.startDate, req.endDate, req.queryDate))
})

