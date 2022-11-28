import { prisma } from "@infra/db/prisma";

interface CreateDelivery {
  id_client: string;
  item_name: string;
}

export class CreateDeliveryUseCase {
  async execute({ id_client, item_name }: CreateDelivery) {
    const delivery = await prisma.delivery.create({
      data: {
        id_client,
        item_name,
      },
    });

    return delivery;
  }
}
