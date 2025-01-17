import { createBrowserRouter, LoaderFunction } from "react-router-dom";
import App from "./App";

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
  CookingHome,
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
} from "./templates/Cooking/utils/constants";
import {
  CookingSingleMeal,
  MealsLoaderData,
} from "./templates/Cooking/types/types";

// Meal Loader Function for Cooking Template
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
          <CookingApp />
        </CookingMealProvider>
      </CookingSidebarProvider>
    ),

    children: [
      { index: true, path: "", element: <CookingHome /> },
      {
        path: "meal/category/:name",
        element: <CookingCategoryPage />,
        loader: mealsLoader,
        errorElement: <div>Failed to load meals. Please try again later.</div>,
      },
      {
        path: "meal/:id",
        element: <CookingMealPage />,
        loader: singleMealLoader,
        errorElement: <div>Failed to load meal. Please try again later.</div>,
      },
      { path: "myRecipes", element: <CookingMyRecipesPage /> },
    ],
  },
]);

export default router;
