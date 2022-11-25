import { hash } from "bcrypt";
import { prismaClient } from "../../../../infra/db/prismaClient";

interface CreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: CreateDeliveryman) {
    const deliverymanExists = await prismaClient.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExists) {
      throw new Error("Deliveryman already exists");
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prismaClient.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}
