import { Outlet } from "react-router-dom";
import CookingHeader from "./components/Header/CookingHeader";
import "./Cooking.scss";
import CookingSidebar from "./components/Sidebar/CookingSideBar";
import CookingScrollToTop from "./components/ScrollToTop/CookingScrollToTop";

const CookingApp = () => {
  return (
    <div className="cooking-template_html">
      <div className="cooking-template">
        <CookingScrollToTop />
        <CookingHeader />
        <CookingSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default CookingApp;
