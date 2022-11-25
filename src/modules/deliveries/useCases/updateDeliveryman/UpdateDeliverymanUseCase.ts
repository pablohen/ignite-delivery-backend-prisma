import { prismaClient } from "../../../../infra/db/prismaClient";

interface UpdateDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: UpdateDeliveryman) {
    const delivery = await prismaClient.delivery.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });

    return delivery;
  }
}
