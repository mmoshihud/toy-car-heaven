import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home";
import App from "../layouts/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
