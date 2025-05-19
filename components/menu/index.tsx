import React from "react";
import MenuItem from "./MenuItem";
import type { CarWithRelations } from "@/types/car";

const Menu = ({
  cars = [],
}: {
  cars?: CarWithRelations[];
}) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3  gap-4">
      {cars.map((car) => (
        <MenuItem
          key={car.id}
          car={car}
        />
      ))}
    </ul>
  );
};

export default Menu;
