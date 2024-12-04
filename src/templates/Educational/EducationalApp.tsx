import { Outlet } from "react-router-dom";
import EducationalHeader from "./components/common/Header/EducationalHeader";
import EducationalFooter from "./components/common/Footer/EducationalFooter";

const EducationalApp = () => {
  return (
    <>
      <EducationalHeader />
      <Outlet />
      <EducationalFooter />
    </>
  );
};

export default EducationalApp;
