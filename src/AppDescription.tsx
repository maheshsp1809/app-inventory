import react from "react";
import { useLocation } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import Insider from "./insidePage/Insider";

const AppDescription = () => {
  const location = useLocation();
  const { desc } = location.state;

  return (
    <>
      <Insider />
    </>
  );
};

export default AppDescription;
