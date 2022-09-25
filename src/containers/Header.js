import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="menu-header">
      <div className="container-header">
      <Link to={'/'}><h2>Shop</h2></Link>
      </div>
      <div className="basket-card"><Link to={'/basket'}><FaShoppingBasket/></Link></div>
    </div>
  );
};

export default Header;
