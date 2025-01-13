import { Outlet } from "react-router-dom";
import CookingHeader from "./components/Header/CookingHeader";
import "./Cooking.scss";
import CookingSidebar from "./components/Sidebar/CookingSidebar";

const CookingApp = () => {
  return (
    <div className="cooking-template">
      <CookingHeader />
      <CookingSidebar />
      <Outlet />
    </div>
  );
};

export default CookingApp;
