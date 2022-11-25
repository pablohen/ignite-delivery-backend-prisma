import { Router } from "express";
import { AuthClientController } from "../../../../modules/account/useCases/authClient/AuthClientController";
import { CreateClientController } from "../../../../modules/client/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "../../../../modules/client/useCases/findAllDeliveries/FindAllDeliveriesController";
import { ensureAuthClient } from "../middlewares/ensureAuthClient";

export const clientRoutes = Router();

const authClientController = new AuthClientController();
const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientRoutes.post("/", createClientController.handle);
clientRoutes.post("/auth", authClientController.handle);
clientRoutes.get(
  "/deliveries",
  ensureAuthClient,
  findAllDeliveriesController.handle
);
