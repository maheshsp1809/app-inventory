import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdInventory } from "react-icons/md";

export function Navbar() {
  return (
    <header className="bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-between w-full px-4 py-2 shadow-lg fixed top-0 left-0 z-50">
      <div className="flex items-center ml-2">
        <MdInventory className="text-white text-2xl" />
        <span className="text-white text-2xl ml-2 font-semibold">
          App Inventory
        </span>
      </div>
      <div className="flex items-center bg-white rounded-lg px-2 py-1 shadow-sm">
        <input
          type="text"
          placeholder="Search apps"
          className="bg-transparent border-none focus:outline-none w-full"
        />
        <FaSearch className="text-gray-800 ml-2" />
      </div>
    </header>
  );
}
