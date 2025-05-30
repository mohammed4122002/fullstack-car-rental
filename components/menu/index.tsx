import React from "react";
import MenuItem from "./MenuItem";
import type { CarWithRelations } from "@/types/car";

const Menu = ({
  cars = [],
}: {
  cars?: CarWithRelations[];
}) => {
  return cars.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-3  gap-4">
      {cars.map((car) => (
        <MenuItem
          key={car.id}
          car={car}
        />
      ))}
    </ul>
  ):(
   <p className="text-accent text-center">No Cars Found</p>
  ) ;
};

export default Menu;
