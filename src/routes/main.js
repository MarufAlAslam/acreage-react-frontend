import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/home";
import Join from "../pages/join";
import Survey from "../pages/survey";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/survey",
        element: <Survey />,
      },
    ],
  },
]);

export default router;
