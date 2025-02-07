import FitnessAbout from "../../components/About/FitnessAbout";
import FitnessContact from "../../components/Contact/FitnessContact";
import FitnessFeature from "../../components/Feature/FitnessFeature";
import FitnessHeader from "../../components/Header/FitnessHeader";
import FitnessOffer from "../../components/Offer/FitnessOffer";
import FitnessExercises from "../../components/Exercises/FitnessExercises";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";

const FitnessHome = () => {
  const { section } = useParams();

  useEffect(() => {
    if (section) {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }
  }, [section]);
  return (
    <>
      <div id="home">
        <FitnessHeader
          text="STEP UP YOUR"
          title1="FITNESS"
          title2="WITH US"
          description="Build Your Body And Fitness With Professional Touch"
          button="JOIN US"
          classHeight="100vh"
          link="#"
        />
      </div>
      <div id="features">
        <FitnessFeature />
      </div>
      <div id="offer">
        <FitnessOffer />
      </div>
      <div id="about">
        <FitnessAbout />
      </div>
      <div id="exercises">
        <FitnessExercises />
      </div>
      <div id="contact">
        <FitnessContact />
      </div>
    </>
  );
};

export default FitnessHome;
