import { Router } from "express";
import { AuthDeliverymanController } from "../../../../modules/account/useCases/authDeliveryman/AuthDeliverymanController";
import { CreateDeliverymanController } from "../../../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesController } from "../../../../modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesController";
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
