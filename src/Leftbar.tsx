import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import VrpanoIcon from "@mui/icons-material/Vrpano";

export function Leftbar() {
  return (
    <aside className="w-16 bg-gray-900 h-screen fixed top-0 left-0 overflow-y-auto">
      <nav className="mt-10">
        <ul>
          <li className="flex items-center justify-center py-4 hover:bg-gray-700">
            <a href="/">
              <HomeIcon className="text-white text-2xl" />
            </a>
          </li>
          <li className="flex items-center justify-center py-4 hover:bg-gray-700">
            <a href="/arApps">
              <ViewInArIcon className="text-white text-2xl" />
            </a>
          </li>
          <li className="flex items-center justify-center py-4 hover:bg-gray-700">
            <a href="/vrApps">
              <VrpanoIcon className="text-white text-2xl" />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
