import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext ();

const DataProvider = ({children}) => {
        const [data, setData] = useState ([]);
        const [cart, setCart] = useState ([]);
        const [quanty, setQuanty ] = useState(0);

        useEffect (() => {
            axios.get("http://127.0.0.1:8000/stock/").then((res)=> setData(res.data));
         
            
        },[])

        const buyProduct = (product) => {
   
            const productrepeat = cart.find((item)=> item.id === product.id) // find repeat products and store it in a variable
         
            if(productrepeat){
               setCart(cart.map((item)=> item.id === product.id ? {...product, quanty: productrepeat.quanty + 1} : item))
            }else {
               setCart([...cart, product]);
            }
         };

    return(
        <DataContext.Provider value={{ data, cart, setCart, buyProduct, quanty, setQuanty}}>{children}</DataContext.Provider>
    )
};

export default DataProvider;
