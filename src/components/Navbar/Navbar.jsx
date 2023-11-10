import React, { useContext } from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import { RiReactjsFill } from 'react-icons/ri';
import MyButton from "../UI/MyButton/MyButton";
import { AuthContext } from "../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    return (
        <nav className="navigation">
            <NavLink to='/tasks' className="navigation__logo">
                <RiReactjsFill />
            </NavLink>
            {isAuth && <ul className="navigation__list">
                    <NavLink to='/tasks' className="navigation__link">Задачи</NavLink>
                    <NavLink to='/posts' className="navigation__link">Посты</NavLink>
                    <NavLink to='/about' className="navigation__link">Информация</NavLink>
                    <MyButton onClick={logout}>Выйти</MyButton>
                </ul>
            }
        </nav>
    );
}
 
export default Navbar;