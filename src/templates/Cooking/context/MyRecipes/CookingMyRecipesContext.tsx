import { createContext } from "react";
import { CookingMyRecipesContextType } from "../../types/types";

export const CookingMyRecipesContext = createContext<
  CookingMyRecipesContextType | undefined
>(undefined);
