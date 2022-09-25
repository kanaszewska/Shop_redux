import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import '../styles/ProductComponent.css';


const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log('products',products)
  
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="column" key={id}>
        <Link to={`/product/${id}`}>
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta-price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
        </Link> 
      </div>
    );
  });
  return (
    <>
      {renderList}
    </>
  )
};

export default ProductComponent;
