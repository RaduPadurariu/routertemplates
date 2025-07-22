import { Dispatch } from "react";

export interface CookingCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
export interface CookingMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface FetchCategoryBeginAction {
  type: "FETCH_CATEGORY_BEGIN";
}

export interface FetchCategorySuccessAction {
  type: "FETCH_CATEGORY_SUCCESS";
  payload: CookingCategory[];
}

export interface FetchCategoryErrorAction {
  type: "FETCH_CATEGORY_ERROR";
  payload: string;
}

export interface CookingMealState {
  categoryLoading: boolean;
  categoryError: string | null;
  categories: CookingCategory[];
}

export interface MealsLoaderData {
  meals: CookingMeal[];
  categoryName: string;
}

export interface MealsLoaderBySearch {
  searchedMeals: CookingMeal[];
}

export interface CookingSingleFetchMeal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strInstructions: string;
  strSource?: string;
  strTags?: string;
  strYoutube?: string;
  ingredients: string[];
  measures: string[];
  [key: string]: string | string[] | undefined;
}

export interface CookingSingleMeal {
  id: string;
  title: string;
  category: string;
  area: string;
  thumbnail: string;
  instructions: string;
  source?: string;
  tags?: string;
  youtube?: string;
  ingredients: string[];
  measures: string[];
}

export interface CookingPersonalSingleMeal {
  id: string;
  title: string;
  mealCategory: string;
  nutritionalCategory: string;
  servings: string;
  thumbnail: string;
  source: string;
  instructions: string[];
  tags?: string[];
  ingredients: string[][];
  time: string;
}

// Context Sidebar

export interface CookingSidebarState {
  isSidebarOpen: boolean;
}

export interface CookingSidebarContextType extends CookingSidebarState {
  openSidebar: () => void;
  closeSidebar: () => void;
}

// Context Meal

export interface CookingMealContextType extends CookingMealState {
  dispatch: Dispatch<any>;
}

// Context My Recipes

export interface CookingMyRecipesContextType {
  filterMeals: CookingPersonalSingleMeal[];
  setFilterMeals: React.Dispatch<
    React.SetStateAction<CookingPersonalSingleMeal[]>
  >;
}
