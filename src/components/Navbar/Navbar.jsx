import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import { RiReactjsFill } from 'react-icons/ri';

const Navbar = () => {
    return (
        <nav className="navigation">
            <NavLink to='/tasks' className="navigation__logo">
                <RiReactjsFill />
            </NavLink>
            <ul className="navigation__list">
                <NavLink to='/tasks' className="navigation__link">Задачи</NavLink>
                <NavLink to='/posts' className="navigation__link">Посты</NavLink>
                <NavLink to='/about' className="navigation__link">Информация</NavLink>
            </ul>
        </nav>
    );
}
 
export default Navbar;