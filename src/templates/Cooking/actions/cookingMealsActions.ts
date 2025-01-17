import axios from "../api/axios";
import {
  FETCH_CATEGORY_BEGIN,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_SUCCESS,
} from "./cookingActions";

import { CATEGORIES_URL } from "../utils/constants";
import {
  CookingCategory,
  FetchCategoryBeginAction,
  FetchCategorySuccessAction,
  FetchCategoryErrorAction,
} from "../types/types";

type CookingMealAction =
  | FetchCategoryBeginAction
  | FetchCategorySuccessAction
  | FetchCategoryErrorAction;

export const startFetchCategories = async (
  dispatch: React.Dispatch<CookingMealAction>,
  signal: AbortSignal
): Promise<void> => {
  try {
    dispatch({ type: FETCH_CATEGORY_BEGIN });
    const response = await axios.get<{ categories: CookingCategory[] }>(
      CATEGORIES_URL,
      { signal }
    );
    dispatch({
      type: FETCH_CATEGORY_SUCCESS,
      payload: response.data.categories,
    });
  } catch (error: any) {
    if (error.name === "CanceledError") {
      console.log("Fetch request cancelled");
    } else {
      dispatch({
        type: FETCH_CATEGORY_ERROR,
        payload: error.message || "Something went wrong",
      });
    }
  }
};
