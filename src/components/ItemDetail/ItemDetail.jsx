import React, { useContext, useState } from 'react';
import {
  Card, CardHeader, CardBody, CardFooter,
  Stack, Heading, Text, Divider,
  ButtonGroup, Image, Flex, Link as ChakraLink
} from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ nombre, descripcion, img, id, precio, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(Context);

  const onAdd = (quantity) => {
    const item = {
      id,
      nombre,
      precio
    };
    setQuantity(quantity);
    addItem(item, quantity);
    toast(`Agregaste ${quantity} productos`);
  };

  const formattedPrice = precio ? precio.toLocaleString('es-ES') : 'N/A';

  return (
    <Card bg='#CACAAA' w={['90%', '80%', '70%']} p={4} mt={5} justify='left'>
      <CardBody>
        <Flex direction={['column', 'row']} align="flex-start">
          <Image
            src={img}
            alt={nombre}
            w={['100%', '400px']}
            h={['300px', '400px']}
            objectFit='cover'
            borderRadius='lg'
            p={2}
            mb={[4, 0]}
          />
          <Stack ml={[0, 4]} spacing={4} flex="1" justify="flex-start">
            <Heading pt={2} fontSize={['24px', '35px']}>{nombre}</Heading>
            <Text fontSize={['24px', '30px']}>${formattedPrice}</Text>
            <Text fontSize={['16px', '20px']}>Descripcion: {descripcion}</Text>
          </Stack>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup flexDirection={['column', 'row']} alignItems={['stretch', 'center']}>
          {
            quantity === 0 ?
              <ItemCount initialValue={1} stock={stock} onAdd={onAdd} /> :
              <>
                <ChakraLink
                  background='#30546E'
                  color='#fff'
                  _hover={{ bg: '#708B9F;', color: '#fff' }}
                  borderRadius="md"
                  p={2}
                  mb={[2, 0]}
                  as={Link}
                  to='/cart'
                  textAlign="center"
                >
                  Ir al carrito
                </ChakraLink>
                <ChakraLink
                  background='#30546E'
                  color='#fff'
                  _hover={{ bg: '#708B9F;', color: '#fff' }}
                  borderRadius="md"
                  p={2}
                  as={Link}
                  to='/'
                  textAlign="center"
                >
                  Seguir comprando
                </ChakraLink>
              </>
          }
        </ButtonGroup>
      </CardFooter>
      <ToastContainer />
    </Card>
  );
};

export default ItemDetail;
