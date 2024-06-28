import './CartWidget.css'; 
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <IoCartOutline color='#fff' size={34} />
            <span className="cart-count">0</span>
        </div>
    )
}
export default CartWidget