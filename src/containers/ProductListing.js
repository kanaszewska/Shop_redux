import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import CategoryList from "./CategoryList";
import ProductComponent from "./ProductComponent";
import { FaAngleDoubleUp } from "react-icons/fa";

import "../styles/ProductListing.css";

const ProductPage = () => {
  const [visible, setVisible] = useState(false);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="container">
      <div className="category-list">
        <CategoryList />
      </div>
      <ProductComponent />
      <div className="arrow-up">
        <FaAngleDoubleUp onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default ProductPage;
