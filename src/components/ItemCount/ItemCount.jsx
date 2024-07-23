import { Button, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const [count, setCount] = useState(initialValue)

    const increase = () => {
      stock > count ? setCount(count + 1) : alert("No hay stock");
    };
    
    const decrease = () => {
       count > initialValue && setCount(count - 1)
    }

  return (
    <Box mt={-150} ml={450}>
    <Button color='#fff'  bgColor='#30546E' variant='solid' _hover={{ bg: '#708B9F;', color: '#fff' }} onClick={decrease}>-</Button>
    <span className='count'>{count}</span>
    <Button color='#fff'  bgColor='#30546E' variant='solid' _hover={{ bg: '#708B9F;', color: '#fff' }}  onClick={increase}>+</Button>
    
    <Button onClick={() => typeof onAdd === 'function' && stock > 0 && onAdd(count)} 
    background='#30546E' 
    color='#fff' 
    _hover={{ bg: '#708B9F;', color: '#fff' }}
    px="24px"
    py="24px"
    fontSize="16px"
    borderRadius="4px"
    alignContent="center"
    ml="60px"
    >
        Agregar al carrito</Button>
    </Box>
  )
}

export default ItemCount