import { UpdateDeliverymanUseCase } from "@useCases/delivery/updateDeliveryman/UpdateDeliverymanUseCase";
import { Request, Response } from "express";

export class UpdateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;
    const { id } = req.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const delivery = await updateDeliverymanUseCase.execute({
      id_delivery: id,
      id_deliveryman,
    });

    return res.json(delivery);
  }
}
