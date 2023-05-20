import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
};

export default PrivateRoute;
