import { CreateDeliveryController } from "@controllers/delivery/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "@controllers/delivery/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "@controllers/delivery/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "@controllers/delivery/updateEndDate/UpdateEndDateController";
import { Router } from "express";

import { ensureAuthClient } from "../middlewares/ensureAuthClient";
import { ensureAuthDeliveryman } from "../middlewares/ensureAuthDeliveryman";

export const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

deliveryRoutes.post("/", ensureAuthClient, createDeliveryController.handle);
deliveryRoutes.get(
  "/available",
  ensureAuthDeliveryman,
  findAllAvailableController.handle
);
deliveryRoutes.put(
  "/updateDeliveryman/:id",
  ensureAuthDeliveryman,
  updateDeliverymanController.handle
);
deliveryRoutes.put(
  "/updateEndDate/:id",
  ensureAuthDeliveryman,
  updateEndDateController.handle
);
