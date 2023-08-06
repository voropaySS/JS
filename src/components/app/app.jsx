import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APPRoute } from "../../const";
import ProtectedRoute from "../protected-route/protected-route";

const MainLayout = lazy(() => import("../mainLayout/mainLayout"));
const UserLayout = lazy(() => import("../userLayout/userLayout"));
const EntryPage = lazy(() => import("../../pages/EntryPage/EntryPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const SignInPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const ForSigningPage = lazy(() =>
  import("../../pages/ForSigningPage/ForSigningPage")
);
const SigningPage = lazy(() => import("../../pages/SigningPage/SigningPage"));
const ShowApplication = lazy(() => import("../show/show"));
const Creature = lazy(() => import("../creature/creature"));
const NotFoundScreen = lazy(() =>
  import("../not-found-screen/not-found-screen")
);

const App = () => {
  const isAuth = true;
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={APPRoute.ENTRY} element={<EntryPage />} />
            <Route
              path={APPRoute.REGISTRATION}
              element={<RegistrationPage />}
            />
            <Route path={APPRoute.LOGIN} element={<SignInPage />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route element={<ProtectedRoute authUser={isAuth} />}>
              <Route path={APPRoute.MAIN} element={<MainPage />} />
            </Route>
            <Route element={<ProtectedRoute authUser={isAuth} />}>
              <Route path={APPRoute.SIGN} element={<ForSigningPage />} />
            </Route>
            <Route element={<ProtectedRoute authUser={isAuth} />}>
              <Route path={APPRoute.SIGNING} element={<SigningPage />} />
            </Route>
            <Route element={<ProtectedRoute authUser={isAuth} />}>
              <Route path={APPRoute.SHOW} element={<ShowApplication />} />
            </Route>
            <Route element={<ProtectedRoute authUser={isAuth} />}>
              <Route path={APPRoute.CREATURE} element={<Creature />} />
            </Route>
          </Route>
          <Route path={APPRoute.NOTFOUND} element={<NotFoundScreen />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
