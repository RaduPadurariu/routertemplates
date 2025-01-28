import FitnessNavbar from "./components/Navbar/FitnessNavbar";
import FitnessAbout from "./components/pages/About/FitnessAbout";
import FitnessFeature from "./components/pages/Feature/FitnessFeature";
import FitnessHeader from "./components/pages/Header/FitnessHeader";
import FitnessOffer from "./components/pages/Offer/FitnessOffer";
import "./Fitness.scss";

const FitnessApp = () => {
  return (
    <div className="fitness-template">
      <FitnessNavbar />
      <FitnessHeader />
      <FitnessFeature />
      <FitnessOffer />
      <FitnessAbout />
    </div>
  );
};

export default FitnessApp;
