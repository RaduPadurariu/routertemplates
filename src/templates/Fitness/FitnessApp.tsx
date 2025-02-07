import { Outlet } from "react-router-dom";
import FitnessFooter from "./components/Footer/FitnessFooter";
import FitnessNavbar from "./components/Navbar/FitnessNavbar";
import "./Fitness.scss";

const FitnessApp = () => {
  return (
    <div className="fitness-template">
      <FitnessNavbar />
      <Outlet />
      <FitnessFooter />
    </div>
  );
};

export default FitnessApp;
