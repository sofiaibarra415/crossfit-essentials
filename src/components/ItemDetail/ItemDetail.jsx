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
        <Card bg='#CACAAA' w='70%' h='95%' p={4} mt={5} justify='left'>
      <CardBody>
        <Flex direction="row" align="flex-start">
          <Image
            src={img}
            alt={nombre}
            w='400px'
            h='400px'
            objectFit='cover'
            borderRadius='lg'
            p={2}
          />
          <Stack ml={4} spacing={4} flex="1" justify="flex-start">
            <Heading pt={2} fontSize='35px'>{nombre}</Heading>
            <Text fontSize='30px'>${formattedPrice}</Text>
            <Text fontSize="20px">Descripcion: {descripcion}</Text>
          </Stack>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          {
            quantity === 0 ?
              <ItemCount initialValue={1} stock={stock} onAdd={onAdd} /> :
              <>
                <ChakraLink background='#30546E' color='#fff' _hover={{ bg: '#708B9F;', color: '#fff' }} borderRadius="md" p={2} as={Link} to='/cart'>Ir al carrito</ChakraLink>
                <ChakraLink background='#30546E' color='#fff' _hover={{ bg: '#708B9F;', color: '#fff' }} borderRadius="md" p={2} as={Link} to='/'>Seguir comprando</ChakraLink>
              </>
          }
        </ButtonGroup>
      </CardFooter>
      <ToastContainer />
    </Card>
    )
}

export default ItemDetail