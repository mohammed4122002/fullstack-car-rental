import Menu from "@/components/menu";
import { getCarsByCategory } from "@/server/db/cars";

export default async function MenuPage() {
  const categorites = await getCarsByCategory();
  return (
    <main>
      {categorites.map((category) => (
        <section key={category.id} className="mt-2">
          <div className="container text-center ">
            <h1 className="text-primary font-bold text-4xl italic mb-6">
              {category.name}
               
            </h1>
            <Menu cars={category.cars} />
          </div>
        </section>
      ))}
    </main>
  );
}
