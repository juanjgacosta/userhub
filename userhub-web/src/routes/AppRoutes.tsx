import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";

import { Home } from "../pages/Home/Home";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Users } from "../pages/Users/Users";
import { Settings } from "../pages/Settings/Settings";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        handle: { title: "Home" },
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        handle: { title: "Dashboard" },
      },
      {
        path: "/users",
        element: <Users />,
        handle: { title: "Users" },
      },
      {
        path: "/settings",
        element: <Settings />,
        handle: { title: "Settings" },
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
