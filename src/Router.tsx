import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EducativeApp from "./templates/Educational/EducationalApp";
import EducationalHome from "./templates/Educational/components/Home/EducationalHome";
import EducationalMyEducation from "./templates/Educational/components/MyEducation/EducationalMyEducation";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/educational",
    element: <EducativeApp />,

    children: [
      { index: true, path: "", element: <EducationalHome /> },
      { path: "myEducation", element: <EducationalMyEducation /> },
    ],
  },
]);

export default router;
