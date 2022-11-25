import { prismaClient } from "../../../../infra/db/prismaClient";

interface UpdateEndDate {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: UpdateEndDate) {
    const delivery = await prismaClient.delivery.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });

    return delivery;
  }
}
