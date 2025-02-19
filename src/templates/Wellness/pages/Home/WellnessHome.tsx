import WellnessDailyRoutine from "../../components/DailyRoutine/WellnessDailyRoutine";
import WellnessHero from "../../components/Hero/WellnessHero";
import WellnessServices from "../../components/Services/WellnessServices";

const WellnessHome = () => {
  return (
    <>
      <WellnessHero />
      <WellnessServices />
      <WellnessDailyRoutine />
    </>
  );
};

export default WellnessHome;
