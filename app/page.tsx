import { db } from "@/lib/prisma";
import BestRental from "./_components/bestRental";
import Hero from "./_components/hero";





export default async function Home() {
/*
  const size =  await db.duration.createMany({
  data: [
    {name : "DAY", price: 0, carId : "cmaut35g00001noqwn2cw16rw"},
    {name : "WEEK", price: 4, carId : "cmaut35g00001noqwn2cw16rw"},
    {name : "MONTH", price: 8, carId : "cmaut35g00001noqwn2cw16rw"},
    {name : "YEAR", price: 8, carId : "cmaut35g00001noqwn2cw16rw"},
  ]
});

const extra =  await db.extra.createMany({
  data: [
    {name : "BABY_SEAT", price: 2, carId : "cmaut35g00001noqwn2cw16rw"},
    {name : "GPS", price: 3, carId : "cmaut35g00001noqwn2cw16rw"},
    {name : "ROOF_BOX", price: 4, carId : "cmaut35g00001noqwn2cw16rw"},
    {name : "WIFI", price: 4, carId : "cmaut35g00001noqwn2cw16rw"},
    
  ]
});
*/
  return (
    <main className="">
      <Hero />
      <BestRental />
    </main>
  );
}
