import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Services", path: "/services" },
  ];
  return (
    <nav className="bg-purple-200 w-full p-4 rounded-2xl">
      <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? (
          <HiOutlineXMark className="w-6 h-6" />
        ) : (
          <GiHamburgerMenu className="w-6 h-6" />
        )}
      </div>

      <ul
        className={`bg-purple-200 rounded-3xl px-16 pb-3 md:w-full md:flex justify-center absolute duration-300 ease-in md:static ${
          isOpen ? "top-10" : "top-[-200px]"
        }`}
      >
        {routes.map((route) => (
          <Navbar key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
}
