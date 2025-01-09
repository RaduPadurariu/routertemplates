import { Outlet } from "react-router-dom";
import EducationalHeader from "./components/common/Header/EducationalHeader";
import EducationalFooter from "./components/common/Footer/EducationalFooter";
import "./Educational.scss";
import EducationalScrollToTop from "./components/common/ScrollToTop/EducationalScrollToTop";

const EducationalApp = () => {
  return (
    <div className="educational-template">
      <EducationalScrollToTop />
      <EducationalHeader />
      <Outlet />
      <EducationalFooter />
    </div>
  );
};

export default EducationalApp;
