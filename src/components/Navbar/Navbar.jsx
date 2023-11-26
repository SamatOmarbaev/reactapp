import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MyButton from "../UI/MyButton/MyButton";
import { authLogout } from "../../store/auth/authReducer";

import "./style.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.isAuth);

  const logout = () => {
    dispatch(authLogout(false));
    localStorage.removeItem("auth");
  };

  return (
    <nav className="navigation">
      <NavLink to="/tasks" className="navigation__logo">
        <RiReactjsFill />
      </NavLink>
      {isAuth && (
        <ul className="navigation__list">
          <div className="navigation__links">
            <NavLink to="/tasks" className="navigation__link">
              Задачи
            </NavLink>
            <NavLink to="/posts" className="navigation__link">
              Посты
            </NavLink>
            <NavLink to="/about" className="navigation__link">
              Информация
            </NavLink>
          </div>
          <div>
            <MyButton onClick={logout}>Выйти</MyButton>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
