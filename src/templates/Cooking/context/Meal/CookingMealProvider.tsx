import { ReactNode, useEffect, useReducer } from "react";
import { CookingMealState } from "../../types/types";
import { mealReducer } from "../../reducers/cookingMealReducer";
import { startFetchCategories } from "../../actions/cookingMealsActions";
import { CookingMealContext } from "./CookingMealContext";

const initialState: CookingMealState = {
  categories: [],
  categoryLoading: true,
  categoryError: null,
};

export const CookingMealProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(mealReducer, initialState);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController
    const { signal } = controller;

    startFetchCategories(dispatch, signal);
  }, []);

  return (
    <CookingMealContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CookingMealContext.Provider>
  );
};
