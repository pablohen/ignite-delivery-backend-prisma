import { CreateDeliverymanUseCase } from "@useCases/deliveryman/createDeliveryman/CreateDeliverymanUseCase";
import { Request, Response } from "express";

export class CreateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    const result = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    return res.json(result);
  }
}
