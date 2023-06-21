import React, { useContext, useState } from "react";
import { DataContext } from '../../Context/ConversoContext';
import './Filter.css';

const Filter = ({ handleFilter }) => {
  const { data, buyProduct } = useContext(DataContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handlePriceFilter = (event) => {
    const price = event.target.value;
    setSelectedPrice(price);
    filterProducts(price, selectedCategory);
  };

  const handleCategoryFilter = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterProducts(selectedPrice, category);
  };

  const filterProducts = (price, category) => {
    let filteredProducts = data;

    if (price) {
      const [minPrice, maxPrice] = price.split('-');
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseInt(minPrice) && product.price <= parseInt(maxPrice)
      );
    }

    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }

    setFilteredProducts(filteredProducts);

    if (typeof handleFilter === 'function') {
      handleFilter(filteredProducts);
    }
  };

  const handleAddToCart = (product) => {
    buyProduct(product);
  };

  return (
    <div className="containerFilter">
      <label htmlFor="price">Price Range:</label>
      <select id="price" onChange={handlePriceFilter} value={selectedPrice}>
        <option value="">All</option>
        <option value="0-100">0 - 100</option>
        <option value="100-200">100 - 200</option>
      </select>
      <br />
      <label htmlFor="category">Category:</label>
      <select id="category" onChange={handleCategoryFilter} value={selectedCategory}>
        <option value="">All</option>
        <option value="Mujer">Mujer</option>
        <option value="Niños">Niños</option>
        <option value="Unisex">Unisex</option>
      </select>
      <div className="filtered-products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="cartContent" key={product.id}>
              <div className="card">
                <div className="container-img">
                  <img src={product.image} alt="product"/>
                </div>
                <div className="texto">
                  <h3>{product.title}</h3>
                  <h4>€{product.price}</h4>
                </div>
                <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
              </div>
            </div>
          ))
        ) : (
          
          <p></p>
         
        )}
      </div>
    </div>
  );
};

export default Filter;

