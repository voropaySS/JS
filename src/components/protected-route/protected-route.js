import { Navigate, Outlet } from "react-router-dom";
import { APPRoute } from "../../const";

const ProtectedRoute = ({ authUser }) => {
  //   const authUser = useSelector(getAuthUserId);
  if (!authUser) {
    return <Navigate to={APPRoute.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
