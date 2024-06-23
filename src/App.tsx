import React from "react";
import "./App.css";
import Routes from "./components/Routes";
import { Navbar } from "./components/Navbar";
import { Leftbar } from "./components/Leftbar";

const App = () => {
  return (
    <div className="flex pl-8 pt-8 mt-3 ml-3 overflow-auto ">
      <div className="App">
        <Navbar />
        <div className="flex">
          <Leftbar />
          <main className="flex-1 ml-2">
            <Routes />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
