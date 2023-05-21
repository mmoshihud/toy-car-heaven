import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import App from "../layouts/App";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../pages/toys/AddToys";
import EditToys from "../pages/toys/EditToys";
import MyToys from "../pages/toys/MyToys";
import ErrorPage from "../pages/error/404";
import AllToys from "../pages/toys/AllToys";
import BlogPage from "../pages/blog/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/my-toys",
        element: <MyToys />,
      },
      {
        path: "/toys/add",
        element: <AddToys />,
      },
      {
        path: "/toys/edit/:id",
        element: <EditToys />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
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
