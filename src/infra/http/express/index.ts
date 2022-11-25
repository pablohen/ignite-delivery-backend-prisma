import express from "express";
import "express-async-errors";
import { catchErrors } from "./middlewares/catchErrors";
import { clientRoutes } from "./routes/client";
import { deliveriesRoutes } from "./routes/deliveries";
import { deliverymanRoutes } from "./routes/deliveryman";

export const app = express();

app.use(express.json());

app.use("/clients", clientRoutes);
app.use("/deliveryman", deliverymanRoutes);
app.use("/deliveries", deliveriesRoutes);

app.use(catchErrors);
