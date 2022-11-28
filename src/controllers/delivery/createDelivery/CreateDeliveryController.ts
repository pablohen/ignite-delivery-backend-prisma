import { CreateDeliveryUseCase } from "@useCases/delivery/createDelivery/CreateDeliveryUseCase";
import { Request, Response } from "express";

export class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { item_name } = req.body;
    const { id_client } = req;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      id_client,
      item_name,
    });

    return res.json(delivery);
  }
}
