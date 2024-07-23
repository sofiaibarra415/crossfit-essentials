import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { FaAngleDown } from "react-icons/fa";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
    Heading
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Box as='nav' position="fixed"
            top="0"
            left="0"
            width="100%"
            height={20}
            bg="#30546E"
            zIndex="1000"
            p="10px 20px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" >
            <Heading fontSize='30px' color='#fff' fontWeight='bold'><Link to='/'>Crossfit Essentials</Link></Heading>
            <Menu>
                <MenuButton as={Button}  rightIcon={<FaAngleDown />}>
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
        </Box>
    );
};

export default NavBar;
