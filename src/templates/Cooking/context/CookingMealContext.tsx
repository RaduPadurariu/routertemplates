import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { mealReducer } from "../reducers/cookingMealReducer";
import { startFetchCategories } from "../actions/cookingMealsActions";
import { CookingMealState } from "../types/types";

interface CookingMealContextType extends CookingMealState {
  dispatch: Dispatch<any>;
}

const initialState: CookingMealState = {
  categories: [],
  categoryLoading: true,
  categoryError: null,
};

const CookingMealContext = createContext<CookingMealContextType | undefined>(
  undefined
);

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

export const useCookingMealContext = (): CookingMealState => {
  const context = useContext(CookingMealContext);
  if (!context) {
    throw new Error(
      "useCookingMealContext must be used within a CookingMealProvider"
    );
  }
  return context;
};
