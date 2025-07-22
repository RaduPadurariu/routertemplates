import { ReactNode, useReducer } from "react";
import { CookingSidebarState } from "../../types/types";
import cookingSidebarReducer from "../../reducers/cookingSidebarReducer";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../../actions/cookingActions";
import { CookingSidebarContext } from "./CookingSidebarContext";

const initialState: CookingSidebarState = {
  isSidebarOpen: false,
};

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
