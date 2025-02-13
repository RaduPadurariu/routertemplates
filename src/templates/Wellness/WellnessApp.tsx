import { Outlet } from "react-router-dom";
import WellnessFooter from "./components/Footer/WellnessFooter";
import WellnessHeader from "./components/Header/WellnessHeader";

import "./Wellness.scss";

const WellnessApp = () => {
  return (
    <div className="wellness-template">
      <WellnessHeader />
      <Outlet />
      <WellnessFooter />
    </div>
  );
};

export default WellnessApp;
