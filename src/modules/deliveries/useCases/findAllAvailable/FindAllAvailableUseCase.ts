import { prismaClient } from "../../../../infra/db/prismaClient";

export class FindAllAvailableUseCase {
  async execute() {
    const deliveries = await prismaClient.delivery.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      },
    });

    return deliveries;
  }
}
