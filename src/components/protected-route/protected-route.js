import { Navigate, Outlet } from "react-router-dom";
import { APPRoute } from "../../const";
import { userStore } from "../../index";

const ProtectedRoute = () => {
  if (!userStore.getUser) {
    return <Navigate to={APPRoute.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
