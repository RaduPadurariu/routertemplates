import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EducativeApp from "./templates/Educational/EducationalApp";
import EducationalHome from "./templates/Educational/components/Home/EducationalHome";
import EducationalMyEducation from "./templates/Educational/components/MyEducation/EducationalMyEducation";
import EducationalAbout from "./templates/Educational/components/About/EducationalAbout";
import EducationalCourses from "./templates/Educational/components/Courses/EducationalCourses";
import EducationalTeam from "./templates/Educational/components/Team/EducationalTeam";
import EducationalPricing from "./templates/Educational/components/Pricing/EducationalPricing";
import EducationalJournal from "./templates/Educational/components/Journal/EducationalJournal";
import EducationalContact from "./templates/Educational/components/Contact/EducationalContact";

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
      { path: "team", element: <EducationalTeam /> },
      { path: "pricing", element: <EducationalPricing /> },
      { path: "journal", element: <EducationalJournal /> },
      { path: "contact", element: <EducationalContact /> },
    ],
  },
]);

export default router;
