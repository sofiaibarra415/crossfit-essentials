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
    Link as ChakraLink,
    Center
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
        <TableContainer m={6} > 
            <Table variant='striped' mt={10} colorScheme='gray' width={1000}  align={'center'} justify={'center'}>
                <Thead>
                    <Tr>
                        <Th fontSize='20px'>Producto</Th>
                        <Th fontSize='20px'>Cantidad</Th>
                        <Th fontSize='20px'>Precio</Th>
                        <Th fontSize='20px'>Subtotal</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        cart.map((prod) => (
                            <Tr key={prod.id} bg='##CACAAA'>
                                <Td>{prod.nombre }</Td>
                                <Td>{prod.quantity }</Td>
                                <Td>{prod.precio}</Td>
                                <Td>{prod.precio * prod.quantity }</Td>
                                <Td>{
                                    <Button onClick={()=> removeItem(prod.id)} fontSize='20px' background={'transparent'}><RiDeleteBin5Fill /></Button>
                                 }</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
            <Flex  m={10} align={'center'} justify={'center'}>
                <Heading color='#55868C' >Total: {getTotalPrice()}</Heading>
                <Button m={10} bg='#55868C' height='50px' width='200px' onClick={() => clearCart()}>Vaciar el carrito <TiDelete size={30}/></Button>
                <Button m={10} bg='#55868C' height='50px' width='200px'><Link to={'/checkout'}> Finalizar compra </Link></Button>
            </Flex>
        </TableContainer>
    )
}
}
export default Cart