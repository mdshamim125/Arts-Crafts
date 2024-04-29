import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAuth from "../../hooks/Hooks";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <ScaleLoader
        color="#36d7b7"
        height={100}
        width={49}
        className="text-center mt-10"
      />
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
