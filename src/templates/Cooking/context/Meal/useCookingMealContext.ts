import { useContext } from "react";
import { CookingMealState } from "../../types/types";
import { CookingMealContext } from "./CookingMealContext";

export const useCookingMealContext = (): CookingMealState => {
  const context = useContext(CookingMealContext);
  if (!context) {
    throw new Error(
      "useCookingMealContext must be used within a CookingMealProvider"
    );
  }
  return context;
};
