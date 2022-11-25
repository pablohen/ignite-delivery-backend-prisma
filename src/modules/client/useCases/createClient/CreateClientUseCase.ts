import { hash } from "bcrypt";
import { prismaClient } from "../../../../infra/db/prismaClient";

interface CreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: CreateClient) {
    const clientExists = await prismaClient.client.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (clientExists) {
      throw new Error("Client already exists");
    }

    const hashPassword = await hash(password, 10);

    const client = await prismaClient.client.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}
