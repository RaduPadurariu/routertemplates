import { FitnessFeatures } from "../../types/fitnessTypes";
import styles from "./FitnessFeature.module.scss";

const FitnessFeatureBox: React.FC<FitnessFeatures> = ({ title, src }) => {
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
