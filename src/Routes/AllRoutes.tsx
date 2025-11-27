import { Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { Routes } from "./RouteConstants";
import HomePage from "../Page/HomePage";

export const routes = [
  {
    path: Routes.ROOT,
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to={Routes.HOME} replace /> },
      { path: Routes.HOME, element: <HomePage /> },
    ],
  },
];
