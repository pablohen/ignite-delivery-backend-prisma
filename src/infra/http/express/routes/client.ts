import { AuthClientController } from "@controllers/account/authClient/AuthClientController";
import { CreateClientController } from "@controllers/client/createClient/CreateClientController";
import { FindAllDeliveriesController } from "@controllers/client/findAllDeliveries/FindAllDeliveriesController";
import { Router } from "express";

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
