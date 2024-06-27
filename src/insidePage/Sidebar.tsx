import React from "react";

interface SidebarProps {
  icon: string;
  name: string;
  average: number;
  total: string;
}

const Sidebar: React.FC<SidebarProps> = ({ icon, name, average, total }) => {
  console.log(icon);
  return (
    <div className="fixed h-[100vh] max-w-7/12 p-10 bg-custom-dark absolute rounded-xl">
      <div className="flex flex-col w-auto items-center justify-center rounded-xl">
        <div className="p-5 w-full rounded-xl">
          <img className="rounded-xl min-w-auto" src={icon} alt="App Icon" />
        </div>
        <h1 className="text-white text-1xl text-fuchsia-400">{name}</h1>
        <button className="text-white text-base text-black bg-gradient-to-r from-purple-400 to-blue-500 px-16 py-[4px] mt-6 rounded-md">
          Install
        </button>
        <div className="flex row-auto items-center justify-evenly mt-10">
          <div className="text-white p-2">
            <h1 className="px-3">{average}⭐</h1>
            <p>Average</p>
          </div>
          <div className="text-white p-2">
            <h1 className="px-3">{total}⭐</h1>
            <p>Ratings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
