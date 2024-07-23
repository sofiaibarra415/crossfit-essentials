import React from 'react';
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './ItemList.css'; // Asegúrate de importar los estilos

const ItemList = ({ productos }) => {
    return (
        <Box display={'flex'} flexWrap={'wrap'} gap='20px' justifyContent={'center'}  className="item-list">
            {productos.map((producto) => (
                <Card key={producto.id} maxW='sm' bg='#CACAAA' margin='5px'>
                    <CardBody>
                        <Image
                            src={producto.img}
                            alt={producto.nombre}
                            w={'300px'}
                            h={'300px'}
                            objectFit={'cover'}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{producto.nombre}</Heading>
                            <Text color='#131E38' fontSize='2xl'>
                                ${producto.precio.toLocaleString('es-ES')}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Button as={Link} to={`/producto/${producto.id}`} background='#30546E' color='#fff' _hover={{ bg: '#708B9F;', color: '#fff' }}>
                            Ver Detalle
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </Box>
    );
}

export default ItemList;
