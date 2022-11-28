import { AuthDeliverymanController } from "@controllers/account/authDeliveryman/AuthDeliverymanController";
import { Router } from "express";

import { FindAllDeliveriesController } from "@controllers/client/findAllDeliveries/FindAllDeliveriesController";
import { CreateDeliverymanController } from "@controllers/deliveryman/createDeliveryman/CreateDeliverymanController";

import { ensureAuthDeliveryman } from "../middlewares/ensureAuthDeliveryman";

export const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authDeliverymanController = new AuthDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();

deliverymanRoutes.post("/", createDeliverymanController.handle);
deliverymanRoutes.post("/auth", authDeliverymanController.handle);
deliverymanRoutes.get(
  "/deliveries",
  ensureAuthDeliveryman,
  findAllDeliveriesController.handle
);
