import { fitnessFeatures } from "../../../../data/fitnessData";
import styles from "./FitnessFeature.module.scss";
import FitnessFeatureBox from "./FitnessFeatureBox";

const FitnessFeature = () => {
  return (
    <div id={styles["fitness-features"]} className={styles["fitness-features"]}>
      <h1>FEATURES</h1>
      <div className={styles["fitness-features__container"]}>
        <ul>
          {fitnessFeatures.map((feature) => {
            return (
              <li key={feature.id}>
                <FitnessFeatureBox title={feature.title} src={feature.src} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FitnessFeature;
