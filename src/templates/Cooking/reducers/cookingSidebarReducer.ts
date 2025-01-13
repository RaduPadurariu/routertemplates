import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/cookingActions";

interface CookingSidebarState {
  isSidebarOpen: boolean;
}

interface CookingSidebarAction {
  type: typeof OPEN_SIDEBAR | typeof CLOSE_SIDEBAR;
}

const cookingSidebarReducer = (
  state: CookingSidebarState,
  action: CookingSidebarAction
): CookingSidebarState => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: false,
      };
    default:
      return state;
  }
};

export default cookingSidebarReducer;
