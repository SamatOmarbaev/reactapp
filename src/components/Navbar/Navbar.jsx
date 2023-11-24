import React, { useContext } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { RiReactjsFill } from "react-icons/ri";
import MyButton from "../UI/MyButton/MyButton";
import { AuthContext } from "../../context";

const Navbar = () => {
  // const {isAuth, setIsAuth} = useContext(AuthContext);

  // const logout = () => {
  //     setIsAuth(false);
  //     localStorage.removeItem('auth');
  // };

  return (
    <nav className="navigation">
      <NavLink to="/tasks" className="navigation__logo">
        <RiReactjsFill />
      </NavLink>
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
          <MyButton>Выйти</MyButton>
        </div>
      </ul>
      {/* {isAuth && <ul className="navigation__list">
                    <div className="navigation__links">
                        <NavLink to='/tasks' className="navigation__link">Задачи</NavLink>
                        <NavLink to='/posts' className="navigation__link">Посты</NavLink>
                        <NavLink to='/about' className="navigation__link">Информация</NavLink>
                    </div>
                    <div>
                        <MyButton onClick={logout}>Выйти</MyButton>
                    </div>
                </ul>
            } */}
    </nav>
  );
};

export default Navbar;
