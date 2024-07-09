import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {ClipLoader} from 'react-spinners'
import { Flex } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { categoryId} = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
    const dataProducts= categoryId? getProductsByCategory(categoryId) : getProducts()
    dataProducts
        .then((prod) => setProductos(prod))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [categoryId])
    return (
        <div className="item-list-container">
            <h1 className='font'>{greeting}</h1>
            {
                loading ?
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                <ClipLoader color='#fff' />  
                </Flex>
            :
            <ItemList productos= {productos} />
            }
        </div>
    )
}
export default ItemListContainer
