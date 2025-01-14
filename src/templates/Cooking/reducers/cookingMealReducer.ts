import {
  FETCH_CATEGORY_BEGIN,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_SUCCESS,
} from "../actions/cookingActions";

interface CookingCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

interface CookingMealState {
  categoryLoading: boolean;
  categoryError: string | null;
  categories: CookingCategory[];
}

interface FetchCategoryBeginAction {
  type: typeof FETCH_CATEGORY_BEGIN;
}

interface FetchCategorySuccessAction {
  type: typeof FETCH_CATEGORY_SUCCESS;
  payload: CookingCategory[];
}

interface FetchCategoryErrorAction {
  type: typeof FETCH_CATEGORY_ERROR;
  payload: string;
}

// Combine all action types
type CookingMealAction =
  | FetchCategoryBeginAction
  | FetchCategorySuccessAction
  | FetchCategoryErrorAction;

export const mealReducer = (
  state: CookingMealState,
  action: CookingMealAction
) => {
  switch (action.type) {
    case FETCH_CATEGORY_BEGIN:
      return {
        ...state,
        categoryLoading: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryLoading: false,
        categories: action.payload,
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        categoryLoading: false,
        categoryError: action.payload,
      };
    default:
      return state;
  }
};
