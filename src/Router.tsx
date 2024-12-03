import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EducativeApp from "./templates/Educative/EducativeApp";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/educative", element: <EducativeApp /> },
]);

export default router;
