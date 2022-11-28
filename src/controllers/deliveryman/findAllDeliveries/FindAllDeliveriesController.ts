import { FindAllDeliveriesUseCase } from "@useCases/deliveryman/findAllDeliveries/FindAllDeliveriesUseCase";
import { Request, Response } from "express";

export class FindAllDeliveriesController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

    const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman);

    return res.json(deliveries);
  }
}
