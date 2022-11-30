import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "../styles/Header.css";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  let items = useSelector((state) => {
    return state.products.items;
  });

  const [size, setSize] = useState(0);

  const handleSize = () => {
    let size = 0;
    items.map((item) => (size += item.amount));
    setSize(size);
  };

  useEffect(() => {
    handleSize();
  });

  return (
    <div className="menu-header">
      <div className="container-header">
        <Link to={"/Shop_redux"}>
          <h2>Shop</h2>
        </Link>
      </div>
      <div className="basket-card">
        <Link to={"/basket"}>
          <span onClick={handleSize}>
            <FaShoppingBasket />
            {size}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
