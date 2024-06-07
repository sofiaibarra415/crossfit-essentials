import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';  

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3 className="navbar-brand">Crossfit Essentials</h3>
            <div className="navbar-buttons">
                <button className="nav-button">Calleras</button>
                <button className="nav-button">Rodilleras</button>
                <button className="nav-button">Muñequeras</button>
                <button className="nav-button">Tops deportivos</button>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
