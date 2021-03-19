import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/Header.css'

export default function Header(){
    return (
        <header className="header_color">
            <section className="header_corpo">
                <Link to="/" className="logo">logo</Link>
                <nav className="menu">
                    <NavLink to="/" className="links" end>Home</NavLink>
                    <NavLink to="sobre" className="links">Sobre</NavLink>
                    <NavLink to="menu" className="links">Menu</NavLink>
                    <NavLink to="login" className="links">Login</NavLink>
                </nav>
            </section>
        </header>
    )
}