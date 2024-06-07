import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { FaAngleDown } from "react-icons/fa";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
} from '@chakra-ui/react'

const NavBar = () => {

    const navbarOptions = [
        {
            label: "Calleras",
            href: "/calleras"
        }, {
            label: "Rodilleras",
            href: "/rodilleras"
        }, {
            label: "Muñequeras",
            href: "/muñequeras"
        }, {
            label: "Zapatillas Deportivas",
            href: "/zapatillas-deportivas"
        },
    ]

    return (
        <nav className="navbar">
            <h3 className="navbar-brand">Crossfit Essentials</h3>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                    Productos
                </MenuButton>
                <MenuList>
                    {
                        navbarOptions.map((navbarOption) => (
                            <MenuItem>{navbarOption.label}</MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
