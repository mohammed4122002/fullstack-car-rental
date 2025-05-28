import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getBestRental = cache(
  () => {
    const bestRental = db.car.findMany({
      include: {
        extras: true,
        durations: true,
      },
    });
    return bestRental;
  },
  ["best-rental"],
  {
    revalidate: 3600,
  }
);
