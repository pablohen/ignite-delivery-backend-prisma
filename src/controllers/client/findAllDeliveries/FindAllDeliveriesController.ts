import { FindAllDeliveriesUseCase } from "@useCases/client/findAllDeliveries/FindAllDeliveriesUseCase";
import { Request, Response } from "express";

export class FindAllDeliveriesController {
  async handle(req: Request, res: Response) {
    const { id_client } = req;

    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

    const deliveries = await findAllDeliveriesUseCase.execute(id_client);

    return res.json(deliveries);
  }
}
