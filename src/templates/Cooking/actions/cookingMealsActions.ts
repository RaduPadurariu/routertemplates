import axios from "../api/axios";
import {
  FETCH_CATEGORY_BEGIN,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_SUCCESS,
} from "./cookingActions";

import { CATEGORIES_URL } from "../utils/constants";

interface CookingCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

interface FetchCategoryBeginAction {
  type: "FETCH_CATEGORY_BEGIN";
}

interface FetchCategorySuccessAction {
  type: "FETCH_CATEGORY_SUCCESS";
  payload: CookingCategory[];
}

interface FetchCategoryErrorAction {
  type: "FETCH_CATEGORY_ERROR";
  payload: string;
}

type CookingMealAction =
  | FetchCategoryBeginAction
  | FetchCategorySuccessAction
  | FetchCategoryErrorAction;

export const startFetchCategories = async (
  dispatch: React.Dispatch<CookingMealAction>
): Promise<void> => {
  try {
    dispatch({ type: FETCH_CATEGORY_BEGIN });
    const response = await axios.get<{ categories: CookingCategory[] }>(
      `${CATEGORIES_URL}`
    );
    dispatch({
      type: FETCH_CATEGORY_SUCCESS,
      payload: response.data.categories,
    });
  } catch (error: any) {
    dispatch({
      type: FETCH_CATEGORY_ERROR,
      payload: error.message || "Something went wrong",
    });
  }
};
