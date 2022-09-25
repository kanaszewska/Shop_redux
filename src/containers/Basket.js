import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import {  addAmountItem, removeAmountItem } from "../redux/actions/productsActions";

import '../styles/Basket.css';

const Basket = () => {
  let items = useSelector((state) => {
    return state.products.items
  });
  let [cost, setCost] = useState(0)
 
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = () => {
        history.push("/");
  };

  const handleCost = () => {
    let cost = 0;
          items.map((item) => (cost += item.price * item.amount));
          setCost(cost);   
        };
      
    
    useEffect(() => {
      handleCost()
    });

  const basketList = items.map((item) => {
      let { amount, id, title, price} = item;

     
  const handleRemove = () => {
        dispatch(removeAmountItem(item))
  }


  const handleAdd = () => {
        dispatch(addAmountItem(item))
        console.log('click++++', amount)
      }


      return(
        <div className="main">
          <div className="basketlist">
            <div key={id}>
            </div>
            <div className="name">
              <h1>{title}</h1>
            </div>
            <div className='element-specify'>
            <div className='button-amount'>
              <button onClick={handleRemove}>-</button>
                {amount}
              <button onClick={handleAdd}>+</button>
            </div>
            <div className='price'>
              <h1>$ {price * amount}</h1>
            </div>
            </div>
            </div>
        </div>

      )
  });
    return(
      <div className='component'>
      
        <div className='basket-container'>
        <h1>SHOPPING BASKET</h1>
            {basketList}
          <div className="total">
          <h1>Total price $ {cost}</h1>
        </div>
      </div>
            <button className='back' onClick={handleOnClick}><FaArrowLeft/>  Back</button>
        </div>
    )
}

export default Basket;
