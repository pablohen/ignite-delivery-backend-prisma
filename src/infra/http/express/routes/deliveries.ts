import { Router } from "express";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "../../../../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "../../../../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "../../../../modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { ensureAuthClient } from "../middlewares/ensureAuthClient";
import { ensureAuthDeliveryman } from "../middlewares/ensureAuthDeliveryman";

export const deliveriesRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

deliveriesRoutes.post("/", ensureAuthClient, createDeliveryController.handle);
deliveriesRoutes.get(
  "/available",
  ensureAuthDeliveryman,
  findAllAvailableController.handle
);
deliveriesRoutes.put(
  "/updateDeliveryman/:id",
  ensureAuthDeliveryman,
  updateDeliverymanController.handle
);
deliveriesRoutes.put(
  "/updateEndDate/:id",
  ensureAuthDeliveryman,
  updateEndDateController.handle
);
