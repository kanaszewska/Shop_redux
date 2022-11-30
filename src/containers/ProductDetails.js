import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../redux/actions/productsActions";
import { FaArrowLeft } from "react-icons/fa";

import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();

  let product = useSelector((state) => {
    return state.allProducts.products.filter((product) => {
      return product.id === parseInt(productId);
    })[0];
  });

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/Shop_redux");
  };

  const handleOnClickBasket = () => {
    dispatch(setItem(product));
  };

  return (
    <div className="product-container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="segment">
          <div className="column">
            <img className="image" src={image} alt="/" />
          </div>
          <div className="column-title">
            <h1>{title}</h1>
            <h2>
              <p className="label"> $ {price}</p>
            </h2>
            <h3 className="block-header">{category}</h3>
            <p className="description">{description}</p>

            <button className="basket-icon" onClick={handleOnClickBasket}>
              <i className="shop icon"></i>
            </button>
          </div>
        </div>
      )}
      <button className="back" onClick={handleOnClick}>
        <FaArrowLeft /> Back
      </button>
    </div>
  );
};

export default ProductDetails;
