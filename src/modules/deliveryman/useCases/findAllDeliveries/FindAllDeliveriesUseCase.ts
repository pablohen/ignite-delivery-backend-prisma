import { prismaClient } from "../../../../infra/db/prismaClient";

export class FindAllDeliveriesUseCase {
  async execute(id_deliveryman: string) {
    const deliveries = await prismaClient.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveries;
  }
}
