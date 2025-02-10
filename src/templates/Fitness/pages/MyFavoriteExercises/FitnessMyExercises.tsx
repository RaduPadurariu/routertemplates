import { Box, Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import FitnessHeader from "../../components/Header/FitnessHeader";
import styles from "./FitnessMyExercises.module.scss";
import { days } from "../../../../data/fitnessData";
import { useState } from "react";

const FitnessMyExercises = () => {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [showPrimary, setShowPrimary] = useState(true);
  const [languageChange, setLanguageChange] = useState(true);

  return (
    <div className={styles["fitness-myExercises"]}>
      <FitnessHeader
        text="My Favorite Exercises"
        title1="PERSONAL"
        title2="PROGRAM"
        description="These are my daily exercises to maintain my fitness."
        button="BACK"
        classHeight="100%"
        link="/fitness"
      />
      <div className={styles["fitness-myExercises__list"]}>
        <Box
          sx={{
            maxWidth: 900,
            margin: "auto",
            padding: "3rem 2rem 2rem 2rem",
            backgroundColor: "#fff5f5",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Button onClick={() => setLanguageChange(true)} variant="contained">
            <img
              src="/images/Templates/Fitness/API/Personal/gb.png"
              alt="English Flag"
              width="24"
              height="16"
              style={{ marginRight: 8 }}
            />
            English
          </Button>
          <Button onClick={() => setLanguageChange(false)} variant="contained">
            <img
              src="/images/Templates/Fitness/API/Personal/ro.png"
              alt="Romanian Flag"
              width="24"
              height="16"
              style={{ marginRight: 8 }}
            />
            Romana
          </Button>
        </Box>
        <Box
          sx={{
            maxWidth: 900,
            margin: "auto",
            padding: 2,
            backgroundColor: "#fff5f5",
          }}
        >
          {/* Zilele săptămânii */}
          <Stack
            direction="row"
            justifyContent="space-between"
            flexWrap={"wrap"}
            gap={"40px"}
            sx={{
              padding: 1,
              backgroundColor: "#ffffff",
            }}
          >
            {days.map((day) => (
              <Button
                key={day.id}
                onClick={() => {
                  setSelectedDay(day);
                  setShowPrimary(true);
                }}
                sx={{
                  flex: 1,
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold",
                  width: "750px",
                  padding: "0.3rem 1rem",
                  backgroundColor:
                    selectedDay.id === day.id ? "#FFE0E0" : "transparent",
                  "&:hover": { backgroundColor: "#fff5f5" },
                }}
              >
                {languageChange ? day.day.en : day.day.ro}
              </Button>
            ))}
          </Stack>

          {/* Program principal și secundar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // flexDirection: { xs: "row" },
              marginTop: 2,
              backgroundColor: "#ffffff",
            }}
          >
            <Button
              sx={{
                flex: 1,
                padding: 2,
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
                position: "relative",
                borderRight: "4px solid #fff5f5",
                "&::after": showPrimary
                  ? {
                      content: '""',
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#FFCACA",
                      borderRadius: "50%",
                      transform: "translateY(-50%)",
                    }
                  : {},
              }}
              onClick={() => setShowPrimary(true)}
            >
              {languageChange
                ? selectedDay.primaryWorkout.en
                : selectedDay.primaryWorkout.ro}
            </Button>
            <Button
              sx={{
                flex: 1,
                padding: 2,
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
                position: "relative",
                "&::after": !showPrimary
                  ? {
                      content: '""',
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#FFCACA",
                      borderRadius: "50%",
                      transform: "translateY(-50%)",
                    }
                  : {},
              }}
              onClick={() => setShowPrimary(false)}
            >
              {languageChange
                ? selectedDay.secondaryWorkout.en
                : selectedDay.secondaryWorkout.ro}
            </Button>
          </Box>

          {/* Exercițiile */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              marginTop: 2,
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            {(showPrimary
              ? selectedDay.primaryWorkoutSrc
              : selectedDay.secondaryWorkoutSrc
            ).map((exercise, index) => (
              <Box key={index} sx={{ marginBottom: 2 }}>
                <Card
                  sx={{
                    padding: 2,
                    backgroundColor: "#ffffff",
                    width: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`/images/Templates/Fitness/API/Personal/${exercise?.src}`}
                    alt={"no-name"}
                  />
                  <Typography
                    variant="body1"
                    textAlign="center"
                    mt={2}
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    {languageChange ? exercise.name.en : exercise.name.ro}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default FitnessMyExercises;
