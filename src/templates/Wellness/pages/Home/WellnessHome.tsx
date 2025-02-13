import WellnessHero from "../../components/Hero/WellnessHero";
import WellnessServices from "../../components/Services/WellnessServices";
import styles from "./WellnessHome.module.scss";

const WellnessHome = () => {
  return (
    <>
      <WellnessHero />
      <WellnessServices />
    </>
  );
};

export default WellnessHome;
