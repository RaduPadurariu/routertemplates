import { Link } from "react-router-dom";
import { fitnessExercises } from "../../../../data/fitnessData";
import FitnessFeatureBox from "../Feature/FitnessFeatureBox";
import exerciseStyle from "./FitnessExercises.module.scss";

const FitnessExercises = () => {
  return (
    <div
      id={exerciseStyle["fitness-features"]}
      className={exerciseStyle["fitness-features"]}
    >
      <h1>EXERCISES</h1>
      <div className={exerciseStyle["fitness-features__container"]}>
        <ul>
          {fitnessExercises.map((feature) => {
            return (
              <li key={feature.id}>
                <Link to={feature.link}>
                  <FitnessFeatureBox title={feature.title} src={feature.src} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FitnessExercises;
