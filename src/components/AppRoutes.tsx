import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AppDescription from "./AppDescription";
import ArApps from "./ArApps";
import VrApps from "./VrApps";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Route for AppDescription with product ID */}
        <Route path="/appDescription/:productId" element={<AppDescription />} />

        <Route path="/arApps" element={<ArApps />} />
        <Route path="/vrApps" element={<VrApps />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
