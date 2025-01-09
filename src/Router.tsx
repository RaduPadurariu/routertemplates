import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Educational

import {
  EducativeApp,
  EducationalHome,
  EducationalMyEducation,
  EducationalAbout,
  EducationalCourses,
  EducationalTeam,
  EducationalPricing,
  EducationalJournal,
  EducationalContact,
} from "./templates/Educational/components/pages/index";

// Cooking
import CookingApp from "./templates/Cooking/CookingApp";
import { CookingHome } from "./templates/Cooking/pages";

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
      { path: "myCourses", element: <EducationalMyEducation /> },
    ],
  },
  {
    path: "/cooking",
    element: <CookingApp />,

    children: [{ index: true, path: "", element: <CookingHome /> }],
  },
]);

export default router;
