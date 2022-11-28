import { CreateClientUseCase } from "@useCases/client/createClient/CreateClientUseCase";
import { Request, Response } from "express";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({
      username,
      password,
    });

    return res.json(result);
  }
}
