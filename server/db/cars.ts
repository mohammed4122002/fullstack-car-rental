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

export const getCarsByCategory = cache(
  () => {
    const cars = db.category.findMany({
      include: {
        cars: {
          include: {
            durations: true,
            extras: true,
          },
        },
      },
    });
    return cars;
  },
  ["cars-by-category"],
  { revalidate: 3600 }
);