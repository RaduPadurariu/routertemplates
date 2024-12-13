import EducationalBack from "../common/Back/EducationalBack";
import EducationalFAQ from "./EducationalFAQ";
import EducationalPriceCard from "./EducationalPriceCard";
import styles from "./EducationalPricing.module.scss";

const EducationalPricing = () => {
  return (
    <>
      <EducationalBack title="Choose The Right Plan" />
      <section className={styles["educational-price"]}>
        <div
          className={`educational-container ${styles["educational-price__grid"]}`}
        >
          <EducationalPriceCard />
        </div>
      </section>

      <EducationalFAQ />
    </>
  );
};

export default EducationalPricing;
