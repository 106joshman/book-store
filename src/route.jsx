import { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderNavList from "./container/header";
import Login from "./container/login";
import Signup from "./container/signup";

export const renderRoutes = (routes = []) => (
  <Suspense>
    <Routes>
      {routes.map((route, i) => {
        const Component = route.components;
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Fragment>
                <Component {...props} />
              </Fragment>
            )}
            element={route.element}
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: "/",
    element: <HeaderNavList />,
  },
  {
    exact: true,
    path: "/login",
    element: <Login />,
  },
  {
    exact: true,
    path: "/signup",
    element: <Signup />,
  },
];
export default routes;
