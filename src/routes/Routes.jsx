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
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "/toys/add",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/toys/edit/:id",
        element: (
          <PrivateRoute>
            <EditToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
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
