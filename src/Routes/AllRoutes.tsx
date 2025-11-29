import { Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { Routes } from "./RouteConstants";
import HomePage from "../Page/HomePage";
import SearchPage from "../Page/SearchPage";
import HotelsPage from "../Page/HotelsPage";

export const routes = [
  {
    path: Routes.ROOT,
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to={Routes.HOME} replace /> },
      { path: Routes.HOME, element: <HomePage /> },
      { path: Routes.SEARCH, element: <SearchPage /> },
      { path: Routes.HOTELS, element: <HotelsPage /> },
    ],
  },
];
