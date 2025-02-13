import { Outlet } from "react-router-dom";
import WellnessFooter from "./components/Footer/WellnessFooter";
import WellnessHeader from "./components/Header/WellnessHeader";

import "./Wellness.scss";

const WellnessApp = () => {
  return (
    <>
      <WellnessHeader />
      <Outlet />
      <WellnessFooter />
    </>
  );
};

export default WellnessApp;
