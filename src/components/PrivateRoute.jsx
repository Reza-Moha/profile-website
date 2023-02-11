import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.userSlice);

  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth/login" replace={true} />;
  }
  return children;
}
