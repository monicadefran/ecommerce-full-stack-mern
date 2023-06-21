import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import {DataContext} from '../../Context/ConversoContext';
import buyProduct from './AllProducts';
import './ProductDetail.css';



 function ProductDetail() {
  const {id} = useParams();
  const {data, buyProduct, quanty, setQuanty, cart} = useContext(DataContext);
  const rutaimagen = "http://localhost:8000/stock/avatar/";

  const zapatillas = data.find(item => item.id === parseInt(id));
  setQuanty(cart.length);
  console.log (zapatillas);

  return (

     <div className="container">
      <h1>{zapatillas.title}</h1>
      <div className='container_imag_descrption'>
        <img className="product-image" src= {(rutaimagen + zapatillas.image)} alt="Imagen del producto"/>
        <div className='container_details'>
          <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci at magna fringilla, a malesuada sem dignissim.</p>
          <p className="product-price">{zapatillas.price}€</p>
          <button className='btn-addcart' onClick={() => buyProduct(zapatillas)}>
                  Add To Cart
                </button>
        </div>
      </div>
    </div>

  );
};

export default ProductDetail;


