import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header(){
    return (
        <header className="header_color">
            <section className="header_corpo">
                <Link to="/">logo</Link>
                <nav className="menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="sobre">Sobre</NavLink>
                    <NavLink to="menu">Menu</NavLink>
                    <NavLink to="login">Login</NavLink>
                </nav>
            </section>
        </header>
    )
}