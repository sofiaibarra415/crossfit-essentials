import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {ClipLoader} from 'react-spinners'
import { Flex, Heading } from '@chakra-ui/react';
import { db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { categoryId} = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const colleccion = collection(db, 'productos')

            const queryRef = !categoryId ?
            colleccion : query(colleccion, where('categoria' , '==' , categoryId))

            const response = await getDocs(queryRef)
            const products = response.docs.map((doc) => {
                const newItem = {
                    ...doc.data(),
                    id: doc.id
                }
                return newItem
            })
            setProductos(products)
            setLoading(false)
        }
        getData()
    }, [categoryId])
    return (
        <div className="item-list-container">
            <Heading color='#30546E' fontSize={25} m={5}>{greeting}</Heading>
            {
                loading ?
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                <ClipLoader color='#30546E' />  
                </Flex>
            :
            <ItemList productos= {productos} />
            }
        </div>
    )
}
export default ItemListContainer
