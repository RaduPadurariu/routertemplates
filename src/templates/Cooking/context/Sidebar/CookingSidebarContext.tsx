import { createContext } from "react";
import { CookingSidebarContextType } from "../../types/types";

export const CookingSidebarContext = createContext<
  CookingSidebarContextType | undefined
>(undefined);
