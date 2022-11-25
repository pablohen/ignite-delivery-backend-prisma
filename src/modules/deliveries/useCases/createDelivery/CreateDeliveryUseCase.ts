import { prismaClient } from "../../../../infra/db/prismaClient";

interface CreateDelivery {
  id_client: string;
  item_name: string;
}

export class CreateDeliveryUseCase {
  async execute({ id_client, item_name }: CreateDelivery) {
    const delivery = await prismaClient.delivery.create({
      data: {
        id_client,
        item_name,
      },
    });

    return delivery;
  }
}
