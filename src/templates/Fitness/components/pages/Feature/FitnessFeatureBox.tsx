import styles from "./FitnessFeature.module.scss";
import { Features } from "../../../types/fitnessTypes";

const FitnessFeatureBox: React.FC<Features> = ({ title, src }) => {
  return (
    <div className={styles["fitness-featureBox"]}>
      <div className={styles["fitness-featureBox__img"]}>
        <img src={src} alt="no-feature-img" />
      </div>
      <div className={styles["fitness-featureBox__text"]}>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing.</p>
      </div>
    </div>
  );
};

export default FitnessFeatureBox;
