import React from "react";
// src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
const Sidebar = () => {
  return (

    <div className="fixed  h-[100vh] p-10 bg-custom-dark absolute  rounded-xl">
      <div className="flex flex-col items-center justify-center rounded-xl">
        <div className="p-5  w-80 rounded-xl">
          <img className=" rounded-xl " src="/image6.png" alt="Instagram Logo" />
        </div>

        <h1 className="text-white text-1xl text-fuchsia-400 ">
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
      {/* <div className="h-[100vh]  w-100   bg-custom-dark absolute  rounded-2lg">
        <div className=" z-0 h-[22%] w-auto bg-gradient-to-r from-purple-400 to-blue-500  rounded-lg p-1">
          <img className=" " src="/image6.png" alt="Instagram Logo" />
        </div>
        <div className=" flex flex-col">
          <h1 className="text-white text-1xl text-fuchsia-400 mt-12 ml-8">
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
      </div> */}
    </div>
  );
};

export default Sidebar;
