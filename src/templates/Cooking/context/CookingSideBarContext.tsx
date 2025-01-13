import { createContext, ReactNode, useContext, useReducer } from "react";

import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/cookingActions";
import cookingSidebarReducer from "../reducers/cookingSidebarReducer";

interface CookingSidebarState {
  isSidebarOpen: boolean;
}

interface CookingSidebarContextType extends CookingSidebarState {
  openSidebar: () => void;
  closeSidebar: () => void;
}

const initialState = {
  isSidebarOpen: false,
};

const CookingSidebarContext = createContext<
  CookingSidebarContextType | undefined
>(undefined);

export const CookingSidebarProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(cookingSidebarReducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <CookingSidebarContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </CookingSidebarContext.Provider>
  );
};

export const useCookingSidebarContext = (): CookingSidebarContextType => {
  const context = useContext(CookingSidebarContext);
  if (!context) {
    throw new Error(
      "useCookingSidebarContext must be used within a CookingSidebarProvider"
    );
  }
  return context;
};
