import { useContext } from "react";
import { DataContext } from "../../Context/ConversoContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import imagen from "../../Assets/emptyCart.jpg"

const CartProducts = () =>{
   const { cart } = useContext(DataContext);
    return cart.length > 0 ?(
    <>
    <CartElements key="cartElements"/>
    <CartTotal />
    </>
    ): (

      <>
      <div className="containerEmptyCart">
        <img className="emptyCart" src={imagen} alt="" /><><h2>

            No dejes tu carro vacío.
          </h2><h3>Echa un vistazo a tus favoritos,
            compra lo nuevo y lo mejor o personaliza unas Converse clásicas.</h3></>
        </div>  
      </>
    );
};

export default CartProducts;