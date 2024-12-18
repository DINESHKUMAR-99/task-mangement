import { useRoutes } from "react-router-dom";
import MainLayout from "../src/components/MainLayout";
import Profile from "../src/pages/Profile";
import Tasks from "../src/pages/Tasks";
import Login from "../src/pages/Login";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnAuthenticatedRoute from "./UnAunthenticatedRoute";
import AddTask from "../src/pages/TaskForm";

const routes = [
  {
    path: "/",
    element: <AuthenticatedRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "tasks",
            element: <Tasks />,
          },
          {
            path: "create-task",
            element: <AddTask />,
          },
          
        ],
      },
    ],
  },
  {
    path: "",
    element: <UnAuthenticatedRoute />, // Changed from '' to '/login' or any other specific path
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default function Routes() {
  return useRoutes(routes);
}
