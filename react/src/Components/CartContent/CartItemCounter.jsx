import {useContext} from "react";
import {DataContext} from '../../Context/ConversoContext';


const CartItemCounter = ({ product, quanty }) => {
  const { cart, setCart, buyProduct } = useContext (DataContext);

  const decrease = ()=> {
    const productrepeat = cart.find((item)=> item.id === product.id) 

    productrepeat.quanty !== 1 && setCart(cart.map((item)=> item.id === product.id ? {...product, quanty: productrepeat.quanty - 1} : item))
  }

  return (
    <>
      <button className='counter-button' onClick={decrease}>-</button>
      <p>{quanty}</p>
      <button className='counter-button' onClick={()=> buyProduct(product)}>+</button>
    </>
  )
}

export default CartItemCounter;