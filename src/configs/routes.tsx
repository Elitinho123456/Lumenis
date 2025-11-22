// Defalt Imports
import { createBrowserRouter } from "react-router-dom";

//Pages
import Home from "../components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

export default router;