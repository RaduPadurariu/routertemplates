import { Box } from "@mui/material";
import styles from "./FitnessAPIExercises.module.scss";
import { useState } from "react";
import { FitnessExercise } from "../../types/fitnessTypes";
import FitnessSearchAPI from "../../components/APIComponents/SearchAPI/FitnessSearchAPI";
import FitnessExercisesList from "../../components/APIComponents/ExercisesList/FitnessExercisesList";
const FitnessAPIExercises = () => {
  const [exercises, setExercises] = useState<FitnessExercise[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");

  return (
    <div className={styles["fitness-APIExercises"]}>
      <div className={styles["fitness-APIExercises__container"]}>
        <Box>
          <div className={styles["fitness-APIExercises__search"]}>
            <FitnessSearchAPI
              exercises={exercises}
              setExercises={setExercises}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
          <div className={styles["fitness-APIExercises__exercises"]}>
            <FitnessExercisesList
              exercises={exercises}
              setExercises={setExercises}
              bodyPart={bodyPart}
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default FitnessAPIExercises;
