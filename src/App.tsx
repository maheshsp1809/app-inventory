import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Leftbar } from "./components/Leftbar";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  return (
    <div className="flex pl-8 pt-8 mt-3 ml-3 overflow-auto bg-custom-bg-bg-dark">
      <div className="App">
        <Navbar />
        <div className="flex">
          <Leftbar />
          <main className="flex-1 ml-2">
            <AppRoutes />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
