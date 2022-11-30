import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  addAmountItem,
  removeAmountItem,
} from "../redux/actions/productsActions";
import { ModalBasket } from "./Modal";

import "../styles/Basket.css";

const Basket = () => {
  const [show, setShow] = useState(false);
  let [cost, setCost] = useState(0);

  let items = useSelector((state) => {
    return state.products.items;
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClickBack = () => {
    history.push("/Shop_redux");
  };

  const handleOnClickPayment = () => {
    if (cost !== 0) {
      history.push("/payment");
    } else {
      setShow(true);
    }
  };
  const handleOnClick = () => {
    setShow(false);
  };

  const handleCost = () => {
    let cost = 0;
    items.map((item) => (cost += item.price * item.amount));
    setCost(cost);
  };

  useEffect(() => {
    handleCost();
  });

  const basketList = items.map((item) => {
    let { amount, id, image, title, price } = item;

    const handleRemove = () => {
      dispatch(removeAmountItem(item));
    };

    const handleAdd = () => {
      dispatch(addAmountItem(item));
    };

    return (
      <div className="main">
        <div className="basketlist">
          <div key={id}></div>
          <div className="picture">
            <p>Picture</p>
            <img className="image" src={image} alt="/" />
          </div>
          <div className="name">
            <p>Name</p>
            <h1>{title}</h1>
          </div>
          <div className="element-specify">
            <div className="price">
              <p>Price</p>
              <h1>$ {price}</h1>
            </div>
            <div className="button-amount">
              <button onClick={handleRemove}>-</button>
              {amount}
              <button onClick={handleAdd}>+</button>
            </div>
            <div className="price">
              <p>Total price</p>
              <h1>$ {price * amount}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="component">
      <div className="basket-container">
        <h1>SHOPPING BASKET</h1>
        <div className="heading"></div>
        <div className="basketList">{basketList}</div>
        <div className="total">
          <h1>Total price $ {cost}</h1>
        </div>
      </div>
      <div>
        <button className="next-level" onClick={handleOnClickPayment}>
          delivery and payment
        </button>
        {show ? (
          <ModalBasket show={show} onClose={handleOnClick}></ModalBasket>
        ) : null}
      </div>
      <button className="back" onClick={handleOnClickBack}>
        <FaArrowLeft /> Back
      </button>
    </div>
  );
};

export default Basket;
