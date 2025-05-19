import React from "react";
import Link from "../Link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";
import Image from "next/image";
const Header = () => {
  return (
    <header className="py-4 md:py-6 shadow-muted shadow-lg ">
      <div className="container flex items-center justify-between ">
        <Link
          href={Routes.ROOT}
          className="text-primary font-semibold text-2xl flex items-center justify-center"
        >
          {" "}
          <Image
            src="https://png.pngtree.com/png-clipart/20240416/original/pngtree-car-music-electronics-concept-color-illustration-png-image_14867585.png"
            alt="car"
            width={65}
            height={65}
          />{" "}
          <span>Dosha</span>{" "}
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
