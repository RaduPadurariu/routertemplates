import { Box, Stack, Typography } from "@mui/material";
import FitnessLoader from "../../Loader/FitnessLoader";
import styles from "./FitnessExerciseVideos.module.scss";
import { FitnessExerciseVideosProps } from "../../../types/fitnessTypes";

const FitnessExerciseVideos: React.FC<{
  exerciseVideos: FitnessExerciseVideosProps[];
  name: string;
}> = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <FitnessLoader />;

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: "row", gap: { lg: "110px", xs: "30px" } }}
        justifyContent="center"
        flexWrap="wrap"
        margin={"0 auto"}
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className={styles["fitness-exercise-video"]}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderRadius: "10px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default FitnessExerciseVideos;
