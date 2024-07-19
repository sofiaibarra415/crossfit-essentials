import React, { useContext, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Input,
  Heading,
  Button,
} from '@chakra-ui/react'
import Context from '../../context/CartContext'
import { collection, addDoc, Timestamp, getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    repeatedEmail: '',
    phone: ''
  })
  const [error, setError] = useState({})
  const navigate = useNavigate()

  const { cart, getTotalPrice, clearCart } = useContext(Context)


  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value
    }))
  }

  const validateForm = () => {
    const errors = {}
    if (!user.name) {
      errors.name = 'Tenes que agregar un nombre'
    } else if (user.name.length < 3 || user.name.length > 15) {
      errors.name = 'el nombre debe tener mas de 3 caracteres y menos de 15'
    }
    if (!user.email) {
      errors.email = 'Tenes que agregar un email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      errors.email = 'Tenes que ingresar un email valido'
    }
    if (!user.repeatedEmail) {
      errors.repeatedEmail = 'Tenes que repetir tu email';
    } else if (user.email !== user.repeatedEmail) {
      errors.repeatedEmail = 'Los emails no coinciden';
    }
    if (!user.phone) {
      errors.phone = 'Tenes que agregar un teléfono';
    } else if (!/^\d{10}$/.test(user.phone)) {
      errors.phone = 'El teléfono debe tener 10 números';
    }
    setError(errors)
    return Object.keys(errors).length === 0
  }


  const getOrder = async () => {
    if (!validateForm()) {
      return
    }

    if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        title: "¡El carrito está vacio!",
      });

      return
    }
    const ordersCollection = collection(db, 'orders')

    try {
      const order = {
        buyer: user,
        cart: cart,
        total: getTotalPrice(),
        fechaDeCompra: Timestamp.now()

      }
      for (const item of cart) {
        const productRef = doc(db, 'productos', item.id)
        const productDoc = await getDoc(productRef)
        const currentStock = productDoc.data().stock

        await updateDoc(productRef, {
          stock: currentStock - item.quantity
        })
      }


      const orderRef = await addDoc(ordersCollection, order)
      clearCart()
      Swal.fire({
        title: `El numero de orden es: ${orderRef.id}`,
        icon: "success"
      });
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Flex direction={'column'} justify={'center'} align={'center'} width='40%' m='50px'>
      <Heading color='#30546E' >Datos de facturación</Heading>
      <FormControl isInvalid={Object.keys(error).length > 0}>
        <FormLabel mt={10} color='#55868C'>Nombre:</FormLabel>
        <Input type='text' name='name' onChange={updateUser} />
        <FormErrorMessage>{error.name}</FormErrorMessage>
        <FormLabel mt={10} color='#55868C'>Email:</FormLabel>
        <Input type='email' name='email' onChange={updateUser} />
        <FormErrorMessage>{error.email}</FormErrorMessage>
        <FormLabel mt={10} color='#55868C'>Repetir email:</FormLabel>
        <Input type='email' name='repeatedEmail' onChange={updateUser} />
        <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>
        <FormLabel mt={10} color='#55868C'>Teléfono:</FormLabel>
        <Input type='text' name='phone' onChange={updateUser} />
        <FormErrorMessage>{error.phone}</FormErrorMessage>
        <Button m={10} bg='#55868C' height='50px' width='200px' onClick={getOrder}>Finalizar compra</Button>
      </FormControl>
    </Flex>
  )
}

export default Checkout