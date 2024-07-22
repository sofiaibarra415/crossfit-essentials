import React, { useContext, useState } from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Image, Flex, Link as ChakraLink, Box } from '@chakra-ui/react'
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
        <Card bg='#CACAAA' w={{ base: '90%', md: '70%' }} h='95%' p={4} mt={{ base: 10, md: 5 }} mx='auto'>
            <CardBody>
                <Flex direction={{ base: 'column', md: 'row' }} align="flex-start">
                    <Image
                        src={img}
                        alt={nombre}
                        w={{ base: '100%', md: '400px' }}
                        h={{ base: 'auto', md: '400px' }}
                        objectFit='cover'
                        borderRadius='lg'
                        mb={{ base: 4, md: 0 }}
                        p={2}
                    />
                    <Stack ml={{ base: 0, md: 4 }} spacing={4} flex="1" justify="flex-start">
                        <Heading pt={2} fontSize={{ base: '25px', md: '35px' }}>{nombre}</Heading>
                        <Text fontSize={{ base: '25px', md: '30px' }}>${formattedPrice}</Text>
                        <Text fontSize="20px">Descripcion: {descripcion}</Text>
                    </Stack>
                </Flex>
            </CardBody>
            <Divider />
            <CardFooter>
                <Box w='100%'>
                    {quantity === 0 ? (
                        <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
                    ) : (
                        <Flex direction={{ base: 'column', md: 'row' }} justify="center" align="center" mt={4}>
                            <ChakraLink
                                as={Link}
                                to='/cart'
                                background='#30546E'
                                color='#fff'
                                _hover={{ bg: '#708B9F;', color: '#fff' }}
                                borderRadius="md"
                                p={2}
                                mb={{ base: 2, md: 0 }}
                                mr={{ base: 0, md: 2 }}
                                textAlign="center"
                            >
                                Ir al carrito
                            </ChakraLink>
                            <ChakraLink
                                as={Link}
                                to='/'
                                background='#30546E'
                                color='#fff'
                                _hover={{ bg: '#708B9F;', color: '#fff' }}
                                borderRadius="md"
                                p={2}
                                textAlign="center"
                            >
                                Seguir comprando
                            </ChakraLink>
                        </Flex>
                    )}
                </Box>
            </CardFooter>
            <ToastContainer />
        </Card>
    )
}

export default ItemDetail

