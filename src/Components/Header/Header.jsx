import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Services", path: "/services" },
  ];
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <Navbar key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
}
