import { Box } from "@mui/material";
import FitnessExerciseVideos from "../../components/APIComponents/ExerciseVideos/FitnessExerciseVideos";
import FitnessSimilarExercises from "../../components/APIComponents/SimilarExercises/FitnessSimilarExercises";
import FitnessHeader from "../../components/Header/FitnessHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FitnessNotFound from "../../components/NotFound/FitnessNotFound";
import {
  FitnessExercise,
  FitnessExerciseDetailProps,
  FitnessExerciseVideosContent,
  FitnessExerciseVideosProps,
} from "../../types/fitnessTypes";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/FetchData";
import styles from "./FitnessAPIExerciseDetail.module.scss";
import FitnessExerciseDetail from "../../components/APIComponents/Detail/FitnessExerciseDetail";

const FitnessAPIExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] =
    useState<FitnessExerciseDetailProps | null>(null);
  const [exerciseVideos, setExerciseVideos] = useState<
    FitnessExerciseVideosProps[]
  >([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<
    FitnessExercise[]
  >([]);
  const [equipmentExercises, setEquipmentExercises] = useState<
    FitnessExercise[]
  >([]);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      try {
        const exerciseDetailData: FitnessExerciseDetailProps = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

        const targetMuscleExercisesData: FitnessExercise[] = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equimentExercisesData: FitnessExercise[] = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equimentExercisesData);
      } catch (error) {
        console.error("Error fetching exercise details:", error);
      }

      try {
        const exerciseVideosData: FitnessExerciseVideosContent =
          await fetchData(
            `${youtubeSearchUrl}/search?query=chest exercise`,
            youtubeOptions
          );

        setExerciseVideos(exerciseVideosData?.contents ?? []);
      } catch (error) {
        console.error("Error fetching exercise details:", error);
      }
    };

    fetchExercisesData();
  }, [id]);

  return (
    <div>
      <FitnessHeader
        text="FITNESS CLUB"
        title1="Sweat, Smile "
        title2="and Repeat"
        description="Check out the most effective exercises personalized to you"
        button="BACK"
        classHeight="100%"
        link="/fitness/apiExercises"
      />
      {exerciseDetail ? (
        <div className={styles["fitness-exerciseDetail"]}>
          <Box maxWidth={"1500px"} margin={"0 auto"}>
            <FitnessExerciseDetail exerciseDetail={exerciseDetail} />
            <FitnessExerciseVideos
              exerciseVideos={exerciseVideos}
              name={exerciseDetail?.name}
            />
            <FitnessSimilarExercises
              targetMuscleExercises={targetMuscleExercises}
              equipmentExercises={equipmentExercises}
            />
          </Box>
        </div>
      ) : (
        <FitnessNotFound />
      )}
    </div>
  );
};

export default FitnessAPIExerciseDetail;
