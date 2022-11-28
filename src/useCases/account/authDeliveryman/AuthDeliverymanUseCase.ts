import { prisma } from "@infra/db/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface AuthDeliveryman {
  username: string;
  password: string;
}

export class AuthDeliverymanUseCase {
  async execute({ username, password }: AuthDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Invalid username or password");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Invalid username or password");
    }

    const token = sign({ username }, process.env.SECRET_KEY_DELIVERYMAN!, {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
