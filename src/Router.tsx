import { createBrowserRouter, LoaderFunction } from "react-router-dom";
import App from "./App";
import "./templates/Cooking/Cooking.scss";
// Educational

import {
  EducativeApp,
  EducationalHome,
  EducationalMyEducation,
  EducationalAbout,
  EducationalCourses,
  EducationalTeam,
  EducationalPricing,
  EducationalJournal,
  EducationalContact,
} from "./templates/Educational/components/pages/index";

// Cooking
import CookingApp from "./templates/Cooking/CookingApp";
import {
  CookingHomePage,
  CookingMyRecipesPage,
  CookingCategoryPage,
  CookingMealPage,
} from "./templates/Cooking/pages";
import { CookingSidebarProvider } from "./templates/Cooking/context/CookingSideBarContext";
import { CookingMealProvider } from "./templates/Cooking/context/CookingMealContext";
import axios from "./templates/Cooking/api/axios";
import {
  MEAL_CATEGORIES_URL,
  MEAL_SINGLE_URL,
  SEARCH_URL,
} from "./templates/Cooking/utils/constants";
import {
  CookingSingleMeal,
  MealsLoaderBySearch,
  MealsLoaderData,
} from "./templates/Cooking/types/types";
import CookingHomeSearch from "./templates/Cooking/pages/HomePage/CookingHomeSearch";
import CookingMyMealPage from "./templates/Cooking/pages/MyRecipes/CookingMyMealPage";
import { CookingMyRecipesProvider } from "./templates/Cooking/context/ContextMyRecipesContext";
import FitnessApp from "./templates/Fitness/FitnessApp";
import FitnessHome from "./templates/Fitness/pages/Home/FitnessHome";
import FitnessAPIExercises from "./templates/Fitness/pages/APIExercises/FitnessAPIExercises";
import FitnessMyExercises from "./templates/Fitness/pages/MyFavoriteExercises/FitnessMyExercises";
import FitnessAPIExerciseDetail from "./templates/Fitness/pages/APIExerciseDetail/FitnessAPIExerciseDetail";
import WellnessApp from "./templates/Wellness/WellnessApp";
import WellnessHome from "./templates/Wellness/pages/Home/WellnessHome";

// Meal Loader Function for Cooking Template

export const mealsBySearch: LoaderFunction = async ({
  params,
  request: { signal },
}: any): Promise<MealsLoaderBySearch> => {
  const searchTerm = params.searchTerm;

  if (!searchTerm) {
    throw new Response("Search term is missing", { status: 400 });
  }

  try {
    const response = await axios.get(`${SEARCH_URL}${searchTerm}`, {
      signal,
    });

    const searchedMeals = response.data.meals || [];

    return {
      searchedMeals,
    };
  } catch (error: any) {
    if (error.name === "CanceledError") {
      console.log("Request was cancelled");
    } else {
      console.error("Failed to fetch meals:", error.message);
    }
    throw new Response("Failed to load category data", { status: 500 });
  }
};

export const mealsLoader: LoaderFunction = async ({
  params,
  request: { signal },
}: any): Promise<MealsLoaderData> => {
  const { name } = params;

  try {
    const response = await axios.get(`${MEAL_CATEGORIES_URL}${name}`, {
      signal,
    });

    const meals = response.data.meals;

    return {
      meals,
      categoryName: name,
    };
  } catch (error: any) {
    if (error.name === "CanceledError") {
      console.log("Request was cancelled");
    }
    throw new Response("Failed to load category data", { status: 500 });
  }
};

export const singleMealLoader: LoaderFunction = async ({
  params,
  request: { signal },
}: any): Promise<CookingSingleMeal> => {
  const { id } = params;

  try {
    const response = await axios.get(`${MEAL_SINGLE_URL}${id}`, {
      signal,
    });

    return response.data.meals;
  } catch (error: any) {
    if (error.name === "CanceledError") {
      console.log("Request was cancelled");
    }
    throw new Response("Failed to load singleMeal data", { status: 500 });
  }
};

// --------------------------------------------------------------------------
// Create Router
const router = createBrowserRouter([
  // Portfolio main routes
  { path: "/", element: <App /> },

  // Educational Routes
  {
    path: "/educational",
    element: <EducativeApp />,

    children: [
      { index: true, path: "", element: <EducationalHome /> },
      { path: "myEducation", element: <EducationalMyEducation /> },
      { path: "about", element: <EducationalAbout /> },
      { path: "courses", element: <EducationalCourses /> },
      { path: "team", element: <EducationalTeam /> },
      { path: "pricing", element: <EducationalPricing /> },
      { path: "journal", element: <EducationalJournal /> },
      { path: "contact", element: <EducationalContact /> },
      { path: "myCourses", element: <EducationalMyEducation /> },
    ],
  },

  // Cooking Routes
  {
    path: "/cooking",
    element: (
      <CookingSidebarProvider>
        <CookingMealProvider>
          <CookingMyRecipesProvider>
            <CookingApp />
          </CookingMyRecipesProvider>
        </CookingMealProvider>
      </CookingSidebarProvider>
    ),

    children: [
      {
        index: true,
        path: "",
        element: <CookingHomePage />,
      },
      {
        path: "meals/:searchTerm",
        element: <CookingHomeSearch />,
        loader: mealsBySearch,
        errorElement: (
          <div className="cooking-error-page">
            Failed to search for meals. Please try again later.
          </div>
        ),
      },
      {
        path: "meal/category/:name",
        element: <CookingCategoryPage />,
        loader: mealsLoader,
        errorElement: (
          <div className="cooking-error-page">
            Failed to load meals. Please try again later.
          </div>
        ),
      },
      {
        path: "meal/:id",
        element: <CookingMealPage />,
        loader: singleMealLoader,
        errorElement: (
          <div className="cooking-error-page">
            Failed to load meal. Please try again later.
          </div>
        ),
      },
      { path: "myRecipes", element: <CookingMyRecipesPage /> },
      { path: "myRecipes/:id", element: <CookingMyMealPage /> },
    ],
  },

  // Fitness
  {
    path: "/fitness",
    element: <FitnessApp />,
    children: [
      {
        index: true,
        path: "",
        element: <FitnessHome />,
      },
      { path: ":section", element: <FitnessHome /> },
      { path: "apiExercises", element: <FitnessAPIExercises /> },
      { path: "exercise/:id", element: <FitnessAPIExerciseDetail /> },
      { path: "myExercises", element: <FitnessMyExercises /> },
    ],
  },

  // Wellness
  {
    path: "/wellness",
    element: <WellnessApp />,
    children: [
      {
        index: true,
        path: "",
        element: <WellnessHome />,
      },
    ],
  },
]);

export default router;
