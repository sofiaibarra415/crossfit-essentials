import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import { Box, Flex } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { ClipLoader } from 'react-spinners'

const ItemDetailContainer = () => {
const [product, setProduct] = useState({})
const {productId} = useParams()
const [loading, setLoading] = useState(true)
useEffect(() => {
    getProductById(productId)
    .then((data) => setProduct(data))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
}, [ ])
  return (
    <Box>
    { loading? 
        <Flex justify={'center'} align={'center'} h={'50vh'}>
        <ClipLoader color='#30546E'/>
        </Flex>
        :
        <Flex justify={'center'} align={'center'} h={'90vh'}>
        <ItemDetail {...product} />
        </Flex>
        
    }
    </Box>
  )
}

export default ItemDetailContainer