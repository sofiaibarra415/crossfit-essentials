import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const [count, setCount] = useState(initialValue)

    const increase = () => {
        count < stock && setCount(count + 1)
    }
    
    const decrease = () => {
       count > initialValue && setCount(count - 1)
    }

  return (
    <div className='contenedor'>
    <button className='button' onClick={decrease}>-</button>
    <span className='count'>{count}</span>
    <button className='button' onClick={increase}>+</button>
    
    <Button onClick={() => typeof onAdd === 'function' && onAdd(count)} 
    background='#30546E' 
    color='#fff' 
    _hover={{ bg: '#708B9F;', color: '#fff' }}
    px="24px"
    py="12px"
    fontSize="16px"
    borderRadius="4px"
    alignContent="center"
    ml="60px"
    mt={-1}
    >
        Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount