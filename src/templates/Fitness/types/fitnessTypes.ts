export interface FitnessFeatures {
  title: string;
  src: string;
}

export interface FitnessExercise {
  id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  instruction: string[];
  secondaryMuscles: string[];
  target: string;
}

export interface FitnessSearchAPIProps {
  exercises: FitnessExercise[];
  setExercises: React.Dispatch<React.SetStateAction<FitnessExercise[]>>;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

export interface FitnessExercisesListProps {
  exercises: FitnessExercise[];
  setExercises: React.Dispatch<React.SetStateAction<FitnessExercise[]>>;
  bodyPart: string;
}

export interface FitnessExerciseCardProps {
  exercise: FitnessExercise;
}

export interface FitnessBodyPartProps {
  item: string;
  setBodyPart?: (value: string) => void;
  bodyPart?: string;
}

export interface FitnessHorizontalScrollbarProps {
  data: any[];
  setBodyPart?: (value: string) => void;
  bodyPart?: string;
}

export interface FitnessHeaderProps {
  text: string;
  title1: string;
  title2: string;
  description: string;
  button: string;
  classHeight: string;
  link: string;
}

export interface FitnessExerciseDetailProps {
  id: number;
  name: string;
  bodyPart: string;
  gifUrl: string;
  target: string;
  equipment: string;
  description: string;
  category: string;
}

interface FitnessExerciseVideosThumbnail {
  id: string;
  url: string;
}
export interface FitnessExerciseVideosProps {
  video: {
    title: string;
    channelName: string;
    thumbnails: FitnessExerciseVideosThumbnail[];
    videoId: string;
  };
}

export interface FitnessExerciseVideosContent {
  contents: FitnessExerciseVideosProps[];
}

export interface FitnessExerciseSimilarProps {
  equipmentExercises: FitnessExercise[];
  targetMuscleExercises: FitnessExercise[];
}
