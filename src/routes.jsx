import Home from "./pages/Home/Home.jsx";
import Login from "./pages/auth/Login";
import AuthLayout from "./pages/auth/AuthLayout.jsx";
import UserProfile from "./pages/user/index.jsx";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/auth/Register";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "userprofile",
        element: <UserProfile />,
        auth: true,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });

export default authCheck(routes);
