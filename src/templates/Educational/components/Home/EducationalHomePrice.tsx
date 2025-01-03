import EducationalHeading from "../common/Heading/EducationalHeading";
import EducationalPriceCard from "../Pricing/EducationalPriceCard";
import styles from "./EducationalHome.module.scss";
import pricingStyles from "../Pricing/EducationalPricing.module.scss";

const EducationalHomePrice = () => {
  return (
    <>
      <section className={styles["educational-homePrice"]}>
        <EducationalHeading
          subtitle="OUR PRICING"
          title="Pricing & Package"
          className={styles["custom-headingClass"]}
        />
        <div
          className={`educational-container ${pricingStyles["educational-price__grid"]} ${pricingStyles["educational-price"]}`}
        >
          <EducationalPriceCard />
        </div>
      </section>
    </>
  );
};

export default EducationalHomePrice;
