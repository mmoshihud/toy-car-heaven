import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

export default router;
