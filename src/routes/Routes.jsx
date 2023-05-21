import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import App from "../layouts/App";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../pages/toys/AddToys";
import EditToys from "../pages/toys/EditToys";

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
        path: "/toys/add",
        element: <AddToys></AddToys>,
      },
      {
        path: "/toys/edit/:id",
        element: <EditToys />,
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
