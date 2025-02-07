import styles from "./FitnessBodyPart.module.scss";
import React from "react";
import { Stack, Typography } from "@mui/material";
import { FitnessBodyPartProps } from "../../../../types/fitnessTypes";

const FitnessBodyPart: React.FC<FitnessBodyPartProps> = ({
  item,
  setBodyPart,
  bodyPart,
}) => {
  const isActive = bodyPart === item;
  const stackStyles = {
    borderTop: `${isActive ? "4px solid red" : ""}`,
    background: "#fff",
    borderBottomLeftRadius: "20px",
    width: "270px",
    height: "282px",
    cursor: "pointer",
    gap: "47px",
  };

  return (
    <Stack
      component="button"
      alignItems="center"
      justifyContent="center"
      className={styles["fitness-bodyPart-card"]}
      sx={stackStyles}
      onClick={() => {
        if (setBodyPart) setBodyPart(item);
        window.scrollTo({ top: 1000, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src="/images/Templates/Fitness/API/gym.png"
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default FitnessBodyPart;
