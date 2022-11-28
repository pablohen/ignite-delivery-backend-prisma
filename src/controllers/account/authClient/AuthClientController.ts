import { AuthClientUseCase } from "@useCases/account/authClient/AuthClientUseCase";
import { Request, Response } from "express";

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
