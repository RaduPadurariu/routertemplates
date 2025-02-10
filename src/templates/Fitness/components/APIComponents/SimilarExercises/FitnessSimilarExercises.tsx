import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FitnessHorizontalScrollbar from "../SearchAPI/HorizontalScrollbar/FitnessHorizontalScrollbar";
import FitnessLoader from "../../Loader/FitnessLoader";
import { FitnessExerciseSimilarProps } from "../../../types/fitnessTypes";

const FitnessSimilarExercises: React.FC<FitnessExerciseSimilarProps> = ({
  targetMuscleExercises,
  equipmentExercises,
}) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack
        direction="row"
        sx={{ p: 2, position: "relative" }}
        justifyContent={"center"}
      >
        {targetMuscleExercises.length !== 0 ? (
          <FitnessHorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <FitnessLoader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack
        direction="row"
        sx={{ p: 2, position: "relative" }}
        justifyContent={"center"}
      >
        {equipmentExercises.length !== 0 ? (
          <FitnessHorizontalScrollbar data={equipmentExercises} />
        ) : (
          <FitnessLoader />
        )}
      </Stack>
    </Box>
  );
};

export default FitnessSimilarExercises;
