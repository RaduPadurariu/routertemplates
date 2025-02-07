import { Box, Stack, Typography } from "@mui/material";
import styles from "./FitnessHorizontalScrollbar.module.scss";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import FitnessBodyPart from "../BodyPart/FitnessBodyPart";
import { FitnessHorizontalScrollbarProps } from "../../../../types/fitnessTypes";
import FitnessExerciseCard from "../../ExerciseCard/FitnessExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      className={styles["fitness-right-arrow"]}
    >
      <img
        src="/images/Templates/Fitness/API/left-arrow.png"
        alt="right-arrow"
      />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      className={styles["fitness-left-arrow"]}
    >
      <img
        src="/images/Templates/Fitness/API/right-arrow.png"
        alt="right-arrow"
      />
    </Typography>
  );
};

const FitnessHorizontalScrollbar: React.FC<FitnessHorizontalScrollbarProps> = ({
  data,
  setBodyPart,
  bodyPart,
}) => {
  return bodyPart ? (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      scrollContainerClassName={styles["fitness-scroll-container"]}
    >
      {data.map((item) => (
        <Box key={item.id || item} data-item-id={item.id || item} m="0 40px">
          <FitnessBodyPart
            item={item}
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      ))}
    </ScrollMenu>
  ) : (
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
      {" "}
      {data.map((item, idx) => (
        <FitnessExerciseCard key={idx} exercise={item} />
      ))}{" "}
    </Stack>
  );
};

export default FitnessHorizontalScrollbar;
