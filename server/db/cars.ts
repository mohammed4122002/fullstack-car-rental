import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getBestRental = cache(
  (limit?: number | undefined  ) => {
    const bestRental = db.car.findMany({
      where:{
        orders:{
          some:{}
        }
      },
      orderBy:{
        orders : {
          _count:"desc"
        },

      },
      include: {
        extras: true,
        durations: true,
      },
      take : limit,
    });
    return bestRental;
  },
  ["best-rental"],
  {
    revalidate: 3600,
  }
);
