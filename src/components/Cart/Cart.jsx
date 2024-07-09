import React, { useContext } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Flex,
    Heading,
    Text,
    Link as ChakraLink
} from '@chakra-ui/react'
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";

const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useContext(Context)
if (cart.length === 0){
    return(
    <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
        <Text>Todavia no agregaste productos</Text>
        <ChakraLink as={Link} to='/' color={'#30546E'}>Ver Productos</ChakraLink>
    </Flex>
    )
}else{
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>Producto</Th>
                        <Th>Cantidad</Th>
                        <Th>Precio</Th>
                        <Th>Subtotal</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        cart.map((prod) => (
                            <Tr key={prod.id}>
                                <Td>{prod.nombre }</Td>
                                <Td>{prod.quantity }</Td>
                                <Td>{prod.precio}</Td>
                                <Td>{prod.precio * prod.quantity }</Td>
                                <Td>{
                                    <Button onClick={()=> removeItem(prod.id)} background={'transparent'}><RiDeleteBin5Fill /></Button>
                                 }</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
            <Flex>
                <Heading>Total: {getTotalPrice()}</Heading>
                <Button onClick={() => clearCart()}>Vaciar el carrito <TiDelete /></Button>
                <Heading>Finalizar compra</Heading>
            </Flex>
        </TableContainer>
    )
}
}
export default Cart