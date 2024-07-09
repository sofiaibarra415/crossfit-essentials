import React, { useContext, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Image, Flex, Link as ChakraLink } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import './ItemDetail.css';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ nombre, descripcion, img, id, precio, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(Context)

    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio
        }
        setQuantity(quantity)
        addItem(item, quantity)
        toast(`Agregaste ${quantity} productos`)
    }
    const formattedPrice = precio ? precio.toLocaleString('es-ES') : 'N/A';
    return (
        <Card maxW="2x1"
            bg="gray.100"
            mt="170px" /* margen superior */
            p="20px"
            borderRadius="lg"
            boxShadow="lg"
            border="2px solid" /* borde externo */
            borderColor="gray.300" /* color del borde */>
            <CardBody >
                <Flex direction="column" align="center">
                    <Image
                        src={img}
                        alt={nombre}
                        w={'300px'}
                        h={'300px'}
                        objectFit={'cover'}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre}</Heading>
                        <Text color='#131E38' fontSize='2xl'>
                            ${formattedPrice}
                        </Text>
                        <Text>
                            Descripcion: {descripcion}
                        </Text>
                    </Stack>
                </Flex>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    {
                        quantity === 0 ?
                            <ItemCount initialValue={1} stock={stock} onAdd={onAdd}></ItemCount>
                            :
                            <>
                            <ChakraLink as={Link} to='/cart'>Ir al carrito</ChakraLink>
                            <ChakraLink as={Link} to='/'>Seguir comprando</ChakraLink>
                            </>
                }
                </ButtonGroup>
            </CardFooter>
            <ToastContainer />
        </Card>
    )
}

export default ItemDetail