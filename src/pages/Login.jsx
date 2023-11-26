import React from "react";
import { useDispatch } from "react-redux";

import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import Title from "../components/Title/Title";
import { authLogin } from "../store/auth/authReducer";

const Login = () => {
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(authLogin(true));
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <Title>Страница для логина</Title>
      <form onSubmit={submit} className="login__form">
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
