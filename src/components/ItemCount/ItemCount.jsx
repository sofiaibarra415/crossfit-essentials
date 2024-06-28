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
    <div>
    <button className='button' onClick={decrease}>-</button>
    <span className='count'>{count}</span>
    <button className='button' onClick={increase}>+</button>
    
    <Button onClick={() => typeof onAdd === 'function' && onAdd(count)} bg="#3d4c6e"
    color="white"
    px="24px"
    py="12px"
    fontSize="16px"
    borderRadius="4px"
    _hover={{ bg: "#131E38" }}
    mt="10px"
    alignContent="center"
    ml="60px"
    >
        Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount