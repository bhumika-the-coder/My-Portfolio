import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 fixed top-0 left-0 w-full z-50 bg-[#171d32] pb-5 border-b border-white-400">
      <span className="text-xl font-bold tracking-wide z-[1000]">BHUMIKA.</span>
      <ul
    className={`${menu ? "flex" : "hidden"}
      fixed inset-0 z-50
      w-full h-screen
      flex-col items-center justify-center
      gap-7
      px-6 py-20
      bg-[#171d32]/80 backdrop-blur-md
      text-xl font-semibold

      md:static md:h-auto md:w-auto
      md:flex md:flex-row md:justify-end
      md:gap-6 md:px-0 md:py-0
      md:bg-transparent md:backdrop-blur-none
    `}
  >
    <li>
      <a href="#about" onClick={() => openMenu(false)}>
        About
      </a>
    </li>

    <li>
      <a href="#education" onClick={() => openMenu(false)}>
        Education
      </a>
    </li>

    <li>
      <a href="#projects" onClick={() => openMenu(false)}>
        Projects
      </a>
    </li>

    <li>
      <a href="#contact" onClick={() => openMenu(false)}>
        Contact
      </a>
    </li>
  </ul>
      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden fixed right-10 top-6 z-[60] cursor-pointer"
          onClick={() => openMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 z-[60] cursor-pointer"
          onClick={() => openMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
