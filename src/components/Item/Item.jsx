import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { px } from 'framer-motion'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

const Item = ({ nombre, id, img, precio, stock,  }) => {
    const formattedPrice = precio.toLocaleString('es-ES');
    return (
        <Card maxW='sm' bg='#CACAAA' margin='5px'>
            <CardBody>
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
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <ItemCount initialValue={1} stock={stock}></ItemCount>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item