import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/ConversoContext";
import { Link, useLocation } from "react-router-dom"; 

import "./AllProducts.css";

function AllProducts() {
  const { data, buyProduct } = useContext(DataContext);
  const [likedProducts, setLikedProducts] = useState([]);

  const rutaimagen = "http://localhost:8000/stock/avatar/";

  const handleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const getHeartEmoji = (productId) => {
    if (likedProducts.includes(productId)) {
      return "❤️";
    } else {
      return "🤍";
    }
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search");
  const filteredProducts = data.filter((product) => {
    return product.title.toLowerCase().includes(searchQuery?.toLowerCase());
  });

  return (
    <>
      <div className="container-allProducts">
        {searchQuery || filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="cartContent" key={product.id}>
              <div className="card">
                <span
                  onClick={() => handleLike(product.id)}
                  className="heart-icon-container"
                >
                  <span
                    className={
                      likedProducts.includes(product.id)
                        ? "heart-icon-red"
                        : "heart-icon"
                    }
                  >
                    {getHeartEmoji(product.id)}
                  </span>
                </span>

                <div className="container-img">
                  <Link to={`/Details/${product.id}`}>
                    <img src={(rutaimagen + product.image)} alt="product" />
                  </Link>
                </div>
                <div className="texto">
                  <Link to={`/Details/${product.id}`}>
                    <h3>{product.title}</h3>
                  </Link>
                  <h4>€{product.price}</h4>
                </div>
                <button onClick={() => buyProduct(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          data.map((product) => (
            <div className="cartContent" key={product.id}>
              <div className="card">
                <span
                  onClick={() => handleLike(product.id)}
                  className="heart-icon-container"
                >
                  <span
                    className={
                      likedProducts.includes(product.id)
                        ? "heart-icon-red"
                        : "heart-icon"
                    }
                  >
                    {getHeartEmoji(product.id)}
                  </span>
                </span>

                <div className="container-img">
                  <Link to={`/Details/${product.id}`}>
                    <img src={(rutaimagen + product.image)} alt="product" />
                  </Link>
                </div>
                <div className="texto">
                  <Link to={`/Details/${product.id}`}>
                    <h3>{product.title}</h3>
                  </Link>
                  <h4>€{product.price}</h4>
                </div>
                <button onClick={() => buyProduct(product)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default AllProducts;
