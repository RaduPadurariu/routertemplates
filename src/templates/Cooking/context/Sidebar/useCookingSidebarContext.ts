import { useContext } from "react";
import { CookingSidebarContext } from "./CookingSidebarContext";
import { CookingSidebarContextType } from "../../types/types";

export const useCookingSidebarContext = (): CookingSidebarContextType => {
  const context = useContext(CookingSidebarContext);
  if (!context) {
    throw new Error(
      "useCookingSidebarContext must be used within a CookingSidebarProvider"
    );
  }
  return context;
};
