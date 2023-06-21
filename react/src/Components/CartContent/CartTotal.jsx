import { useContext } from "react";
import { DataContext } from "../../Context/ConversoContext";

const CartTotal = () => {
    const { cart } = useContext(DataContext);
    const total = cart.reduce((acc, el)=> acc + el.price * el.quanty, 0);
    return <div className='cartTotal'>
        <h3>
            Total due: €{total}
        </h3>
    </div>;

};

export default CartTotal;