import React from "react";
// src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
const Sidebar = () => {
  return (
    <div className="fixed rounded-2lg">
      <div className="h-[100vh] w-96 bg-custom-dark relative">
        <div className="absolute z-20 h-[160px] w-[160px] bg-gradient-to-r from-purple-400 to-blue-500 m-[91px] rounded-lg p-1">
          <img className=" " src="/image6.png" alt="Instagram Logo" />
          <h1 className="text-white text-2xl mt-10">Digital Twin</h1>
          <h1 className="text-white text-1xl text-fuchsia-400 m-2 ml-8">
            Digital-twin
          </h1>
          <button className="text-white text-base text-black bg-gradient-to-r from-purple-400 to-blue-500 px-16 py-[4px] mt-6  rounded-md">
            Install
          </button>

          <div className="flex row-auto items-center justify-evenly mt-10">
            <div className="text-white p-2">
              <h1 className="px-3">4.1⭐</h1>
              <p>Average</p>
            </div>

            <div className="text-white p-2">
              <h1 className="px-3">4.1⭐</h1>
              <p>Average</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
