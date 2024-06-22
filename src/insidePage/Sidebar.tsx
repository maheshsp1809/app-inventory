import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed rounded-2lg">
      <div className="h-[100vh] w-96 bg-custom-dark relative">
        <div className="absolute z-20 h-[160px] w-[160px] bg-red-500 m-[91px] rounded-lg p-1">
          <img
            className=" "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            alt="Instagram Logo"
          />
          <h1 className="text-white text-3xl mt-10">Instagram</h1>
          <h1 className="text-white text-1xl text-fuchsia-400 m-2 ml-8">
            Instagram
          </h1>
          <button className="text-white text-base text-black bg-fuchsia-400 px-16 py-[4px] mt-6  rounded-md">
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
