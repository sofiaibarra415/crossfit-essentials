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
        nombre: 'Calleras Tradicionales',
        precio: 25000,
        categoria: 'Calleras',
        stock: 5,
        descripcion: 'Protegen manos en CrossFit, ofrecen agarre seguro, previenen callos y ampollas, mejoran rendimiento y seguridad.',
        img: callerasTradicionales
    },
    {
        nombre: 'Rodilleras Negras',
        precio: 60000,
        categoria: 'Rodilleras',
        stock: 50,
        descripcion: 'Brindan soporte y protección óptima para sentadillas, fabricadas en neopreno de alta calidad. Las rodilleras negras ofrecen ajuste cómodo, durabilidad y flexibilidad, ideales para entrenamientos intensivos y prevención de lesiones.',
        img: rodillerasImg
    },
    {
        nombre: 'Muñequeras',
        precio: 15000,
        categoria: 'Muñequeras',
        stock: 200,
        descripcion: 'Ofrecen soporte y estabilidad en ejercicios de CrossFit. Las muñequeras de alta resistencia, fabricadas en materiales duraderos, proporcionan ajuste seguro y cómodo, reduciendo el riesgo de lesiones y mejorando el rendimiento durante entrenamientos intensivos.',
        img: muñequerasImg
    },
    {
        nombre: 'NANO X3 blancas',
        precio: 150000,
        categoria: 'Zapatillas',
        stock: 30,
        descripcion: 'Las Nano X3 ofrecen un rendimiento excepcional para entrenamientos intensivos. Con diseño ergonómico y materiales de alta calidad, estas zapatillas proporcionan soporte, durabilidad y comodidad, optimizando tu desempeño en cada ejercicio.',
        img: nanox3rojas
    },
    {
        nombre: 'NANO X3 negras',
        precio: 150000,
        categoria: 'Zapatillas',
        stock: 75,
        descripcion: 'Las Nano X3 ofrecen un rendimiento excepcional para entrenamientos intensivos. Con diseño ergonómico y materiales de alta calidad, estas zapatillas proporcionan soporte, durabilidad y comodidad, optimizando tu desempeño en cada ejercicio.',
        img: nanox3negras
    },
    {
        nombre: 'Rodilleras Azules',
        precio: 65000,
        categoria: 'Rodilleras',
        stock: 75,
        descripcion: 'Brindan soporte y protección óptima para sentadillas, fabricadas en neopreno de alta calidad. Las rodilleras azules ofrecen ajuste cómodo, durabilidad y flexibilidad, ideales para entrenamientos intensivos y prevención de lesiones.',
        img: rodillerasAzules
    },
    {
        nombre: 'Muñequeras para sudor',
        precio: 20000,
        categoria: 'Muñequeras',
        stock: 75,
        descripcion: 'Absorben el sudor eficazmente durante entrenamientos intensivos. Las muñequeras están hechas de materiales suaves y transpirables, ofreciendo comodidad y manteniendo tus manos secas. Ideales para deportes y actividades físicas.',
        img: muñequerassudor
    },
    {
        nombre: 'NANO X3 beige',
        precio: 200000,
        categoria: 'Zapatillas',
        stock: 75,
        descripcion: 'Las Nano X3 ofrecen un rendimiento excepcional para entrenamientos intensivos. Con diseño ergonómico y materiales de alta calidad, estas zapatillas proporcionan soporte, durabilidad y comodidad, optimizando tu desempeño en cada ejercicio.',
        img: nanox3beige
    },
    {
        nombre: 'Calleras sin agujeros',
        precio: 25000,
        categoria: 'Calleras',
        stock: 75,
        descripcion: 'Proporcionan protección sin comprometer el agarre. Las calleras sin agujeros para CrossFit están diseñadas para evitar desgarros y ampollas, fabricadas con materiales duraderos y flexibles que aseguran comodidad y rendimiento en cada ejercicio.',
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