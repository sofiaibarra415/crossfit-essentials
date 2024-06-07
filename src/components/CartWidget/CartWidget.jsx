import cart from './assets/carrito-de-compras.png'
import './CartWidget.css'; 

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={cart} alt="carrito" className="cart-image" />
            <span className="cart-count">0</span>
        </div>
    )
}
export default CartWidget