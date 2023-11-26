import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import Loader from "./UI/Loader/Loader";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const { isAuth, isLoading } = useSelector((state) => state.isAuth);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.id} path={route.path} Component={route.Component} />
      ))}
      <Route path="/*" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.id} path={route.path} Component={route.Component} />
      ))}
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
