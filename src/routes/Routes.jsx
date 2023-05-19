import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Profile from "../components/pages/profile/Profile";
import Register from "../components/pages/register/Register";
import App from "../layouts/App";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-toys",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/user-profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
