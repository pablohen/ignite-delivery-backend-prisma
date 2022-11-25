import { Request, Response } from "express";
import { AuthClientUseCase } from "./AuthClientUseCase";

export class AuthClientController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const authClientUseCase = new AuthClientUseCase();
    const result = await authClientUseCase.execute({
      username,
      password,
    });

    return res.json(result);
  }
}
