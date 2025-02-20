import { Outlet } from "react-router-dom";
import CookingHeader from "./components/Header/CookingHeader";
import "./Cooking.scss";
import CookingScrollToTop from "./components/ScrollToTop/CookingScrollToTop";
import CookingSidebar from "./components/Sidebar/CookingSidebar";

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
