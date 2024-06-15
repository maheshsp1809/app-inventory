import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import AppDescription from "./AppDescription";
import ArApps from "./ArApps";
import VrApps from "./VrApps";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/appDescription" element={<AppDescription />}></Route>
        <Route path="/arApps" element={<ArApps />}></Route>
        <Route path="/vrApps" element={<VrApps />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
