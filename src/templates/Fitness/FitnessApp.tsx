import { Outlet } from "react-router-dom";
import FitnessFooter from "./components/Footer/FitnessFooter";
import FitnessNavbar from "./components/Navbar/FitnessNavbar";
import "./Fitness.scss";
import { useEffect } from "react";

const FitnessApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fitness-template">
      <FitnessNavbar />
      <Outlet />
      <FitnessFooter />
    </div>
  );
};

export default FitnessApp;
