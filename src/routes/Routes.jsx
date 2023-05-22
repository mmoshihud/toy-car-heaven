import { createBrowserRouter } from "react-router-dom";
import AddToys from "../pages/toys/AddToys";
import AllToys from "../pages/toys/AllToys";
import App from "../layouts/App";
import BlogPage from "../pages/blog/BlogPage";
import EditToys from "../pages/toys/EditToys";
import ErrorPage from "../pages/error/404";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyToys from "../pages/toys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import ToyDetails from "../pages/toys/ToyDetails";

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
        path: "/toy/:id",
        element: <ToyDetails />,
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
