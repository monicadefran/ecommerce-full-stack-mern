import React from 'react'

import {useContext} from "react";
import {DataContext} from '../../Context/ConversoContext';

const TotalItems = () => {
   const { cart } = useContext (DataContext);

   const itemsQuanty = cart.reduce((acc,el)=> acc + el.quanty, 0);
   return itemsQuanty;
}

export default TotalItems