import { createContext } from "react";
import { CookingMealContextType } from "../../types/types";

export const CookingMealContext = createContext<
  CookingMealContextType | undefined
>(undefined);
