import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { FaAngleDown } from "react-icons/fa";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3 className="navbar-brand"><Link to='/'>Crossfit Essentials</Link></h3>
            <Menu>
                <MenuButton as={Button} className="menu-button" rightIcon={<FaAngleDown />}>
                    Productos
                </MenuButton>
                <MenuList>
                    <MenuItem><Link to='/categorias/Calleras'>Calleras</Link></MenuItem>
                    <MenuItem><Link to='/categorias/Rodilleras'>Rodilleras</Link></MenuItem>
                    <MenuItem><Link to='/categorias/Muñequeras'>Muñequeras</Link></MenuItem>
                    <MenuItem><Link to='/categorias/Zapatillas'>Zapatillas</Link></MenuItem>
                </MenuList>
            </Menu>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
