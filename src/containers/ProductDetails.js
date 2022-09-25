import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct, setItem } from "../redux/actions/productsActions";
import { FaArrowLeft } from "react-icons/fa";

import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();

  let product = useSelector((state) => {
    return state.product
  });

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  const handleOnClick = () => {
    history.push("/");
  };

  const handleOnClickBasket = () => {
    dispatch(setItem(product));
  }

  useEffect(() => {
    console.log('productId', productId)
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);


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
                <h3 className="block-header">{category.name}</h3>
                <p className="description">{description}</p>
           
                  <button className="basket-icon" onClick={handleOnClickBasket}>
                    <i className="shop icon"></i>
                  </button>
              </div>
            </div>
      )}
        <button className='back' onClick={handleOnClick}><FaArrowLeft/>  Back</button>
    </div>
  );
};

export default ProductDetails;
