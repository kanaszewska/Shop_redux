import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ModalOrder } from "./Modal";

import "../styles/Payment.css";

const Payment = () => {
  const initialValue = {
    acceptDelivery: false,
    acceptPayment: false,
  };

  const [cost, setCost] = useState(0);
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [show, setShow] = useState(false);

  let items = useSelector((state) => {
    return state.products.items;
  });
  const history = useHistory();

  const handleOnClick = () => {
    setShow(false);
    history.push("/Shop_redux");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setShow(true);

    if (Object.keys(validate(formValues)).length === 0 && isSubmit) return;
  };

  const validate = (values) => {
    const errors = {};
    if (!values.acceptDelivery) {
      errors.acceptDelivery = "Choose delivery option";
      setShow(false);
    }
    if (!values.acceptPayment) {
      errors.acceptPayment = "Choose payment option";
      setShow(false);
    }
    return errors;
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

    return (
      <div className="main">
        <div className="basketlist">
          <div key={id}></div>
          <div className="picture">
            <img className="image" src={image} alt="/" />
          </div>
          <div className="name">
            <h1>{title}</h1>
          </div>
          <div className="element-specify">
            <div className="amount">
              <p>{amount}</p>
            </div>
            <div className="price">
              <h1>$ {price * amount}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="main">
      <div className="payment-delivery">
        <div className="delivery">
          <h2>Delivery options</h2>
          <p className="error">{formErrors.acceptDelivery}</p>
          <div className="check">
            <label>
              <input
                className="accept-delivery"
                name="acceptDelivery"
                onChange={handleChange}
                type="radio"
                value={formValues.acceptDelivery}
              />
              <p>Standard Shipping</p>
            </label>
            <label>
              <input
                className="accept-delivery"
                name="acceptDelivery"
                onChange={handleChange}
                type="radio"
                value={formValues.acceptDelivery}
              />
              <p>Express Delivery</p>
            </label>
            <label>
              <input
                className="accept-delivery"
                name="acceptDelivery"
                onChange={handleChange}
                type="radio"
                value={formValues.acceptDelivery}
              />
              <p>Next-Day Delivery</p>
            </label>
          </div>
        </div>
        <div className="payment">
          <h2>Payment</h2>
          <p className="error">{formErrors.acceptPayment}</p>
          <div className="check-payment">
            <label>
              <input
                className="accept-payment"
                name="acceptPayment"
                onChange={handleChange}
                type="radio"
                value={formValues.acceptPayment}
              />
              <p>Add credit/debit card</p>
            </label>
            <label>
              <input
                className="accept-payment"
                name="acceptPayment"
                onChange={handleChange}
                type="radio"
                value={formValues.acceptPayment}
              />
              <p>Paypal</p>
            </label>
            <label>
              <input
                className="accept-payment"
                name="acceptPayment"
                onChange={handleChange}
                type="radio"
                value={formValues.acceptPayment}
              />
              <p>Cash on delivery</p>
            </label>
          </div>
        </div>
        <div className="basket-short">
          <h2>My bag</h2>
          {basketList}
          <h2>Total price $ {cost}</h2>
        </div>
        <button className="next-level" type="submit" onClick={handleOnSubmit}>
          PLACE ORDER
        </button>
        {show ? (
          <ModalOrder show={show} onClose={handleOnClick}></ModalOrder>
        ) : null}
      </div>
    </div>
  );
};

export default Payment;
