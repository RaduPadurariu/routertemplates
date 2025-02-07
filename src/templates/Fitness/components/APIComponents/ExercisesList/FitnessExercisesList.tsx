import { Box, Pagination, Stack, Typography } from "@mui/material";
import FitnessExerciseCard from "../ExerciseCard/FitnessExerciseCard";
import { useEffect, useState } from "react";
import {
  FitnessExercise,
  FitnessExercisesListProps,
} from "../../../types/fitnessTypes";
import { exerciseOptions, fetchData } from "../../../utils/FetchData";
import FitnessLoader from "../../Loader/FitnessLoader";
import FitnessNotFound from "../../NotFound/FitnessNotFound";

const FitnessExercisesList: React.FC<FitnessExercisesListProps> = ({
  exercises,
  setExercises,
  bodyPart,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      try {
        if (bodyPart === "all") {
          exercisesData = await fetchData<FitnessExercise[]>(
            "https://exercisedb.p.rapidapi.com/exercises",
            exerciseOptions
          );
        } else {
          exercisesData = await fetchData<FitnessExercise[]>(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exerciseOptions
          );
        }

        setExercises(exercisesData);
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setIsError(true);
      }
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises: FitnessExercise[] = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) return <FitnessLoader />;

  return (
    <Box id="fitness-exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
        textAlign={"center"}
      >
        Showing Results
      </Typography>
      {isError ? (
        <FitnessNotFound />
      ) : (
        <div>
          <Stack
            sx={{
              gap: { lg: "107px", xs: "50px" },
              display: "grid",
              gridTemplateColumns: {
                lg: "repeat(3, 1fr)",
                md: "repeat(2, 1fr)",
                xs: "repeat(1, 1fr)",
              },

              justifyItems: "center",
            }}
          >
            {currentExercises.map((exercise, idx) => (
              <FitnessExerciseCard key={idx} exercise={exercise} />
            ))}
          </Stack>
          <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
            {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
        </div>
      )}
    </Box>
  );
};

export default FitnessExercisesList;
