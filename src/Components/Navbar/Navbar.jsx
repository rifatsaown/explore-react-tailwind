import React from "react";

export default function Navbar({ route }) {
  console.log(route);
  return (
    <li>
      <a href={route.path}>
        {route.name}
        </a>
    </li>
  );
}
