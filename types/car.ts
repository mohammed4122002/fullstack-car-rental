import type { Prisma } from "@prisma/client";



export type CarWithRelations = Prisma.CarGetPayload<{
  include: {
    extras: true;
    durations: true;
  };
}>;
