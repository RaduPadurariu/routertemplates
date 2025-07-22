import { useContext } from "react";
import { CookingMyRecipesContextType } from "../../types/types";
import { CookingMyRecipesContext } from "./CookingMyRecipesContext";

export const useCookingMyRecipesContext = (): CookingMyRecipesContextType => {
  const context = useContext(CookingMyRecipesContext);
  if (!context) {
    throw new Error(
      "useCookingMyRecipesContext must be used within a CookingMealProvider"
    );
  }
  return context;
};
