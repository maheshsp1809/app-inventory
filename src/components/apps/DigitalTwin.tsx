import { useLocation } from "react-router-dom";
import Insider from "../../insidePage/Insider";

const DigitalTwin = () => {
  const location = useLocation();
  const { desc } = location.state;

  return (
    <>
      <Insider />
    </>
  );
};

export default DigitalTwin;
