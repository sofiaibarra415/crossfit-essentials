import callerasTradicionales from '../assets/callerastradicionales.jpeg'
import rodillerasImg from '../assets/rodilleras.jpg'
import muñequerasImg from '../assets/muñequeras.webp'
import nanox3rojas from '../assets/nanox3blancas.webp'
import nanox3negras from '../assets/nanox3negras.jpg'
import nanox3beige from '../assets/nanox3beige.webp'
import muñequerassudor from '../assets/muñequerassudor.webp'
import callerasSinAgujeros from '../assets/callerassinagujeros.webp'
import rodillerasAzules from '../assets/rodillerasazules.jpg'

export const productos = [
    {
        id: 1,
        nombre: 'Calleras Tradicionales',
        precio: 25000,
        categoria: 'Calleras',
        stock: 5,
        descripcion: 'Camiseta de algodón de alta calidad',
        img: callerasTradicionales
    },
    {
        id: 2,
        nombre: 'Rodilleras Negras',
        precio: 60000,
        categoria: 'Rodilleras',
        stock: 50,
        descripcion: 'Pantalones de mezclilla duraderos',
        img: rodillerasImg
    },
    {
        id: 3,
        nombre: 'Muñequeras',
        precio: 15000,
        categoria: 'Muñequeras',
        stock: 200,
        descripcion: 'Zapatillas deportivas cómodas',
        img: muñequerasImg
    },
    {
        id: 4,
        nombre: 'NANO X3 blancas',
        precio: 150000,
        categoria: 'Zapatillas',
        stock: 30,
        descripcion: 'Chaqueta impermeable con capucha',
        img: nanox3rojas
    },
    {
        id: 5,
        nombre: 'NANO X3 negras',
        precio: 150000,
        categoria: 'Zapatillas',
        stock: 75,
        descripcion: 'Bolso de cuero genuino',
        img: nanox3negras
    },
    {
        id: 6,
        nombre: 'Rodilleras Azules',
        precio: 65000,
        categoria: 'Rodilleras',
        stock: 75,
        descripcion: 'Bolso de cuero genuino',
        img: rodillerasAzules
    },
    {
        id: 7,
        nombre: 'Muñequeras para sudor',
        precio: 20000,
        categoria: 'Muñequeras',
        stock: 75,
        descripcion: 'Bolso de cuero genuino',
        img: muñequerassudor
    },
    {
        id: 8,
        nombre: 'NANO X3 beige',
        precio: 200000,
        categoria: 'Zapatillas',
        stock: 75,
        descripcion: 'Bolso de cuero genuino',
        img: nanox3beige
    },
    {
        id: 9,
        nombre: 'Calleras sin agujeros',
        precio: 25000,
        categoria: 'Calleras',
        stock: 75,
        descripcion: 'Bolso de cuero genuino',
        img: callerasSinAgujeros
    }
];
export const getProducts = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve((productos))

        }, 2000)

    })

}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter((prod) => prod.categoria === category)
        setTimeout(() => {

            resolve((productosFiltrados))

        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
        setTimeout(() => {
            resolve(productoFiltrado)
        }, 2000)
    })
}