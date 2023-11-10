import React, { useContext } from "react";
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import Title from "../components/Title/Title";
import { AuthContext } from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const submit = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
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
}
 
export default Login;