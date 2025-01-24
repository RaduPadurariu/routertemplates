import { createContext, ReactNode, useContext, useState } from "react";
import { CookingPersonalSingleMeal } from "../types/types";
import { myRecipesList } from "../../../data/cookingData";

interface CookingMyRecipesContextType {
  filterMeals: CookingPersonalSingleMeal[];
  setFilterMeals: React.Dispatch<
    React.SetStateAction<CookingPersonalSingleMeal[]>
  >;
}

const CookingMyRecipesContext = createContext<
  CookingMyRecipesContextType | undefined
>(undefined);

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

export const useCookingMyRecipesContext = (): CookingMyRecipesContextType => {
  const context = useContext(CookingMyRecipesContext);
  if (!context) {
    throw new Error(
      "useCookingMyRecipesContext must be used within a CookingMealProvider"
    );
  }
  return context;
};
