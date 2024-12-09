import { Outlet } from "react-router-dom";
import EducationalHeader from "./components/common/Header/EducationalHeader";
import EducationalFooter from "./components/common/Footer/EducationalFooter";
import "./Educational.scss";

const EducationalApp = () => {
  return (
    <div className="educational-template">
      <EducationalHeader />
      <Outlet />
      <EducationalFooter />
    </div>
  );
};

export default EducationalApp;
