import { Outlet } from "react-router-dom";
import CookingHeader from "./components/Header/CookingHeader";
import CookingSideBar from "./components/SideBar/CookingSideBar";

const CookingApp = () => {
  return (
    <div className="cooking-template">
      <CookingHeader />
      <CookingSideBar />
      <Outlet />
    </div>
  );
};

export default CookingApp;
