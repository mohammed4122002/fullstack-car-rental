
import Contact from "@/components/contact";
import BestRental from "./_components/bestRental";
import Hero from "./_components/hero";
import About from "@/components/about";





export default async function Home() {

  return (
    <main className="">
      <Hero />
      <BestRental />
      <About/>
      <Contact/>
     
    </main>
  );
}
