import React from "react";

export default function Navbar({ route }) {
  return (
    <li className="md:mr-12 bg-purple-300 rounded-2xl p-2 md:mb-0 mb-1 hover:bg-purple-400">
      <button>
      <a href={route.path}>{route.name}</a>
      </button>
    </li>
  );
}
