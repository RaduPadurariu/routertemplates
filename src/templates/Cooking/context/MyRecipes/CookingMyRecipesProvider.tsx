import { ReactNode, useState } from "react";
import { CookingPersonalSingleMeal } from "../../types/types";
import { myRecipesList } from "../../../../data/cookingData";
import { CookingMyRecipesContext } from "./CookingMyRecipesContext";

export const CookingMyRecipesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [filterMeals, setFilterMeals] =
    useState<CookingPersonalSingleMeal[]>(myRecipesList);

  return (
    <CookingMyRecipesContext.Provider value={{ filterMeals, setFilterMeals }}>
      {children}
    </CookingMyRecipesContext.Provider>
  );
};
