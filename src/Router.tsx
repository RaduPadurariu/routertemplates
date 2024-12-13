import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EducativeApp from "./templates/Educational/EducationalApp";
import EducationalHome from "./templates/Educational/components/Home/EducationalHome";
import EducationalMyEducation from "./templates/Educational/components/MyEducation/EducationalMyEducation";
import EducationalAbout from "./templates/Educational/components/About/EducationalAbout";
import EducationalCourses from "./templates/Educational/components/Courses/EducationalCourses";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/educational",
    element: <EducativeApp />,

    children: [
      { index: true, path: "", element: <EducationalHome /> },
      { path: "myEducation", element: <EducationalMyEducation /> },
      { path: "about", element: <EducationalAbout /> },
      { path: "courses", element: <EducationalCourses /> },
    ],
  },
]);

export default router;
