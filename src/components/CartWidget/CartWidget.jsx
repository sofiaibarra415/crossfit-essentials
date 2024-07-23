import { useContext } from 'react';
import './CartWidget.css';
import { IoCartOutline } from "react-icons/io5";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react'


const CartWidget = () => {
    const { getQuantity } = useContext(Context)
    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Link to='/cart'>
                <IoCartOutline color='#fff' size={34} />
            </Link>
            <span className="cart-count">{getQuantity()}</span>
        </Box>
    )
}
export default CartWidget