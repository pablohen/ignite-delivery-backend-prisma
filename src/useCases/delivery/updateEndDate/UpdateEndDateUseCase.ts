import { prisma } from "@infra/db/prisma";

interface UpdateEndDate {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: UpdateEndDate) {
    const delivery = await prisma.delivery.updateMany({
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
