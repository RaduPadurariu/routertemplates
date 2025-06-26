export const fitnessNavLinks = [
  { id: 1, text: "Home", link: "/fitness/home" },
  { id: 2, text: "Features", link: "/fitness/features" },
  { id: 3, text: "Offer", link: "/fitness/offer" },
  { id: 4, text: "About", link: "/fitness/about" },
  { id: 5, text: "Personal", link: "/fitness/exercises" },
  { id: 6, text: "Contact", link: "/fitness/contact" },
];

export const fitnessFeatures = [
  { id: 1, title: "Weight Lifting", src: "/images/Templates/Fitness/1.svg" },
  { id: 2, title: "Specific Muscle", src: "/images/Templates/Fitness/2.svg" },
  { id: 3, title: "Flex Your Muscle", src: "/images/Templates/Fitness/3.svg" },
  { id: 4, title: "Cardio Exercise", src: "/images/Templates/Fitness/4.svg" },
];

export const fitnessExercises = [
  {
    id: 1,
    title: "API Exercises",
    src: "/images/Templates/Fitness/1.svg",
    link: "/fitness/apiExercises",
  },
  {
    id: 2,
    title: "Favorite Exercises",
    src: "/images/Templates/Fitness/2.svg",
    link: "/fitness/myExercises",
  },
];

export const days = [
  {
    id: 1,
    day: { en: "MONDAY", ro: "Luni" },
    primaryWorkout: { en: "Biceps", ro: "Biceps" },
    primaryWorkoutSrc: [
      {
        name: { en: "Assisted Pull-Ups", ro: "Tractiuni asistate" },
        src: "Biceps1.gif",
      },
      {
        name: { en: "Dumbbell Bicep Curls", ro: "Flexii biceps cu gantere" },
        src: "Biceps2.gif",
      },
    ],

    secondaryWorkout: { en: "Back", ro: "Spate" },
    secondaryWorkoutSrc: [
      { name: { en: "Pull-Up", ro: "Tractiuni spate" }, src: "Spate1.gif" },
      {
        name: { en: "Bent-over Dumbbell Rows", ro: "Ramat cu gantere" },
        src: "Spate2.gif",
      },
    ],
  },

  {
    id: 2,
    day: { en: "TUESDAY", ro: "Marti" },
    primaryWorkout: { en: "Chest", ro: "Piept" },
    primaryWorkoutSrc: [
      { name: { en: "Push-Ups", ro: "Flotari" }, src: "Piept1.gif" },
      {
        name: { en: "Dumbbell Bench Press", ro: "Impins cu gantere" },
        src: "Piept2.gif",
      },
    ],
    secondaryWorkout: { en: "Triceps", ro: "Triceps" },
    secondaryWorkoutSrc: [
      { name: { en: "Dips", ro: "Flotari la paralele" }, src: "Triceps1.gif" },
      {
        name: { en: "Dumbbell Pullover", ro: "Pullover cu gantera" },
        src: "Triceps2.gif",
      },
    ],
  },
  {
    id: 3,
    day: { en: "WEDNESDAY", ro: "Miercuri" },
    primaryWorkout: { en: "Forearm", ro: "Antebrat" },
    primaryWorkoutSrc: [
      {
        name: { en: "Close-Grip Pull-Up", ro: "Tractiuni cu priza ingusta" },
        src: "Antebrat1.gif",
      },
      {
        name: {
          en: "Seated Dumbbell Wrist Curl",
          ro: "Flexii de incheietura cu gantere",
        },
        src: "Antebrat2.gif",
      },
    ],
    secondaryWorkout: { en: "Abs", ro: "Abdomen" },
    secondaryWorkoutSrc: [
      { name: { en: "Crunches", ro: "Abdomene" }, src: "Abdomen1.gif" },
      {
        name: { en: "Bicycle Crunches", ro: "Abdomene bicicleta" },
        src: "Abdomen2.gif",
      },
    ],
  },
  {
    id: 4,
    day: { en: "THURSDAY", ro: "Joi" },
    primaryWorkout: { en: "Shoulders", ro: "Umeri" },
    primaryWorkoutSrc: [
      { name: { en: "Pike Push-Ups", ro: "Flotari Pike" }, src: "Umeri1.gif" },
      {
        name: {
          en: "Seated Dumbbell Press",
          ro: "Impins deasupra capului cu gantere",
        },
        src: "Umeri2.gif",
      },
    ],
    secondaryWorkout: { en: "Traps", ro: "Trapez" },
    secondaryWorkoutSrc: [
      {
        name: { en: "Dumbbell Shrugs", ro: "Ridicari din umeri cu gantere" },
        src: "Trapez1.gif",
      },
      {
        name: { en: "Face Pull", ro: "Tractiunii la scripete pentru fata" },
        src: "Trapez2.gif",
      },
    ],
  },
  {
    id: 5,
    day: { en: "FRIDAY", ro: "Vineri" },

    primaryWorkout: { en: "Thighs", ro: "Coapse" },
    primaryWorkoutSrc: [
      {
        name: { en: "Dumbbell Squat", ro: "Genuflexiuni cu gantere" },
        src: "Coapse1.gif",
      },
      {
        name: { en: "Dumbbell Lunge", ro: "Fandari cu gantere" },
        src: "Coapse2.gif",
      },
    ],
    secondaryWorkout: { en: "Calves", ro: "Gambe" },
    secondaryWorkoutSrc: [
      {
        name: { en: "Donkey Calf Raises", ro: "Ridicări pe vârfuri" },
        src: "Gambe1.gif",
      },
      {
        name: {
          en: "Dumbbell Calf Raise",
          ro: "Ridicari pe varfuri cu gantere",
        },
        src: "Gambe2.gif",
      },
    ],
  },
  // {
  //   id: 2,
  //   day: "TUESDAY",
  //   primaryWorkout: "Chest",
  //   primaryWorkoutSrc: [
  //     { name: "Push-Ups", src: "Piept1.gif" },
  //     { name: "Dumbbell Bench Press", src: "Piept2.gif" },
  //   ],
  //   secondaryWorkout: "Abs",
  //   secondaryWorkoutSrc: [
  //     { name: "Crunches", src: "Abdomen1.gif" },
  //     { name: "Bicycle Crunches", src: "Abdomen2.gif" },
  //   ],
  // },

  // {
  //   id: 3,
  //   day: "WEDNESDAY",
  //   primaryWorkout: "Triceps",
  //   primaryWorkoutSrc: [
  //     { name: "Dips", src: "Triceps1.gif" },
  //     { name: "Dumbbell Pullover", src: "Triceps2.gif" },
  //   ],
  //   secondaryWorkout: "Traps",
  //   secondaryWorkoutSrc: [
  //     { name: "Dumbbell Shrugs", src: "Trapez1.gif" },
  //     { name: "Face Pull", src: "Trapez2.gif" },
  //   ],
  // },

  // {
  //   id: 4,
  //   day: "THURSDAY",
  //   primaryWorkout: "Back",
  //   primaryWorkoutSrc: [
  //     { name: "Pull-Up", src: "Spate1.gif" },
  //     { name: "Bent-over Dumbbell Rows", src: "Spate2.gif" },
  //   ],
  //   secondaryWorkout: "Forearm",
  //   secondaryWorkoutSrc: [
  //     { name: "Close-Grip Pull-Up", src: "Antebrat1.gif" },
  //     { name: "Seated Dumbbell Wrist Curl", src: "Antebrat2.gif" },
  //   ],
  // },

  // {
  //   id: 5,
  //   day: "FRIDAY",
  //   primaryWorkout: "Shoulders",
  //   primaryWorkoutSrc: [
  //     { name: "Pike Push-Ups", src: "Umeri1.gif" },
  //     { name: "Seated Dumbbell Press", src: "Umeri2.gif" },
  //   ],
  //   secondaryWorkout: "Thighs",
  //   secondaryWorkoutSrc: [
  //     { name: "Dumbbell Squat", src: "Coapse1.gif" },
  //     { name: "Dumbbell Lunge", src: "Coapse2.gif" },
  //   ],
  // },
];
