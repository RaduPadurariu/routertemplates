import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import FitnessHorizontalScrollbar from "./HorizontalScrollbar/FitnessHorizontalScrollbar";

import styles from "../../../pages/APIExercises/FitnessAPIExercises.module.scss";
import {
  FitnessExercise,
  FitnessSearchAPIProps,
} from "../../../types/fitnessTypes";
import { exerciseOptions, fetchData } from "../../../utils/FetchData";
import FitnessNotFound from "../../NotFound/FitnessNotFound";

type BodyPartList = string[];

const FitnessSearchAPI: React.FC<FitnessSearchAPIProps> = ({
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState<string>("");
  const [bodyParts, setBodyParts] = useState<BodyPartList>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchExercisesData = async () => {
      setIsError(false);
      try {
        const bodyPartsData = await fetchData<BodyPartList>(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );

        setBodyParts(["all", ...bodyPartsData]);
      } catch (error) {
        console.error("Error fetching body parts:", error);
        setIsError(true);
      }
    };
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        setIsError(false);
        const exercisesData: FitnessExercise[] = await fetchData<
          FitnessExercise[]
        >("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

        const searchedExercises: FitnessExercise[] = exercisesData.filter(
          (item: FitnessExercise) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.target.toLowerCase().includes(search.toLowerCase()) ||
            item.equipment.toLowerCase().includes(search.toLowerCase()) ||
            item.bodyPart.toLowerCase().includes(search.toLowerCase())
        );

        // Ensure state updates only if there's a change
        setExercises((prevExercises) =>
          JSON.stringify(prevExercises) !== JSON.stringify(searchedExercises)
            ? searchedExercises
            : prevExercises
        );

        // Delay clearing search & scrolling to prevent state interference
        setTimeout(() => {
          setSearch("");
          window.scrollTo({ top: 1000, left: 100, behavior: "smooth" });
        }, 100);

        console.log(searchedExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setIsError(true);
      }
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          backgroundColor: "#black",
          marginTop: "80px",
          padding: "80px 15px 30px 15px",
          color: "white",
        }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1170px", md: "850px", sm: "550px", xs: "300px" },
            backgroundColor: "#fff",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className={styles["fitness-search-btn"]}
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {isError ? (
        <FitnessNotFound />
      ) : (
        <>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              p: "20px",
              backgroundColor: "#fffafb;",
            }}
          >
            {bodyParts.length > 0 && (
              <div className={styles["fitness-horizontalScrollBar"]}>
                {" "}
                <FitnessHorizontalScrollbar
                  data={bodyParts}
                  setBodyPart={setBodyPart}
                  bodyPart={bodyPart}
                />
              </div>
            )}
          </Box>
        </>
      )}
    </Stack>
  );
};

export default FitnessSearchAPI;
