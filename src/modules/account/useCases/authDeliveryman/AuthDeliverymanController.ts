import { Request, Response } from "express";
import { AuthDeliverymanUseCase } from "./AuthDeliverymanUseCase";

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
