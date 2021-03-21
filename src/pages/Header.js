import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './css/Header.module.css'

export default function Header(){
    return (
        <header className={styles.header_color}>
            <section className={styles.header_corpo}>
                <Link to="/" className={styles.logo}>logo</Link>
                <nav className="menu">
                    <ul>
                        <li><NavLink to="/" activeClassName={styles.active} className={styles.links} end>Home</NavLink></li>
                        <li><NavLink to="sobre" activeClassName={styles.active} className={styles.links}>Sobre</NavLink></li>
                        <li><NavLink to="menu" activeClassName={styles.active} className={styles.links}>Menu</NavLink></li>
                        <li><NavLink to="login" activeClassName={styles.active} className={styles.links}>Login</NavLink></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}