import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import { FaAngleDoubleUp } from "react-icons/fa";

import '../styles/ProductListing.css'

const ProductPage = () => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState(null);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  const fetchProductsByCategory = async (category) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  let allCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(json=>{
        setData(json);
        }
        ) 
  }
  
  useEffect(() => {
    fetchProducts();
    allCategories();
  }, []);

  const handleSearch = (categoryArg) => {
    fetchProductsByCategory(categoryArg);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="container">
          <div className="category-list">
            <ul>
              {   
                data && data.map(element =>       
                  <li onClick={() => handleSearch(element)}>{element}</li>)
              } 
            </ul>
          </div>
            <ProductComponent />
        <div className="arrow-up">
          <FaAngleDoubleUp onClick={scrollToTop}/>
        </div>
    </div>
  );
};

export default ProductPage;
