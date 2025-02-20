import { useParams } from "react-router-dom";
import WellnessDailyRoutine from "../../components/DailyRoutine/WellnessDailyRoutine";
import WellnessHero from "../../components/Hero/WellnessHero";
import WellnessServices from "../../components/Services/WellnessServices";
import { useEffect } from "react";
import { scroller } from "react-scroll";

const WellnessHome = () => {
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
        <WellnessHero />
      </div>
      <div id="services">
        <WellnessServices />
      </div>
      <div id="routine">
        <WellnessDailyRoutine />
      </div>
    </>
  );
};

export default WellnessHome;
