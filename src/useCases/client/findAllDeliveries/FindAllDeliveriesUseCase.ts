import { prisma } from "@infra/db/prisma";

export class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.client.findMany({
      where: {
        id: id_client,
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
