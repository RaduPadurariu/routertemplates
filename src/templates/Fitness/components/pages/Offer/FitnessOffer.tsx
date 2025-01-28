import { Link } from "react-router-dom";
import styles from "./FitnessOffer.module.scss";

const FitnessOffer = () => {
  return (
    <div id={styles["fitness-offer"]} className={styles["fitness-offer"]}>
      <div className={styles["fitness-offer__heading"]}>
        <h1>
          A BIG <span>OFFER</span> FOR THIS SUMMER
        </h1>
        <p className={styles["fitness-offer__heading_details"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
        <div className={styles["fitness-offer__heading_prBtns"]}>
          <Link to="#">JOIN NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default FitnessOffer;
