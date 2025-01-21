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
