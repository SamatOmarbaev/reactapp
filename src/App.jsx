import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { authLoading, authLogin } from "./store/auth/authReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      dispatch(authLogin(true));
    }
    dispatch(authLoading(false));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
