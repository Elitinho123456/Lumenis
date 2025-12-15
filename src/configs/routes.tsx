// Defalt Imports
import { createBrowserRouter } from "react-router-dom";

//Pages
import ErrorPage from "../components/pages/ErrorPage";

import Home from "../components/pages/Home";
import Portfolio from "../components/pages/Portfolio";
import Curriculum from "../components/pages/Curriculum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/curriculum",
    element: <Curriculum />
  }
]);

export default router;