import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../../../infra/db/prismaClient";

interface AuthClient {
  username: string;
  password: string;
}

export class AuthClientUseCase {
  async execute({ username, password }: AuthClient) {
    const client = await prismaClient.client.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Invalid username or password");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Invalid username or password");
    }

    const token = sign({ username }, process.env.SECRET_KEY_CLIENT!, {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
