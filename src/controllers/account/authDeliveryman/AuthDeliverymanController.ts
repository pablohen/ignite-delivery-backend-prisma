import { AuthDeliverymanUseCase } from "@useCases/account/authDeliveryman/AuthDeliverymanUseCase";
import { Request, Response } from "express";

export class AuthDeliverymanController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const authDeliverymanUseCase = new AuthDeliverymanUseCase();
    const result = await authDeliverymanUseCase.execute({
      username,
      password,
    });

    return res.json(result);
  }
}
