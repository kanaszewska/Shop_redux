import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const setItem = (item) => {
  return {
    type: ActionTypes.SET_ITEM,
    payload: item,
  };
};

export const removeSelectedItem = (item) => {
  console.log('removeSelectedItem', item)
  return {
    type: ActionTypes.REMOVE_SELECTED_ITEM,
    payload: item,
  };
};


export const addAmountItem = (item) => {
  console.log('productActions addAmountItem', item)
  return {
    type: ActionTypes.ADD_AMOUNT_ITEM,
    payload: item,
  };
};
export const removeAmountItem = (item) => {
  console.log('productActions removeAmountItem', item)
  return {
    type: ActionTypes.REMOVE_AMOUNT_ITEM,
    payload: item,
  };
};

export const removeItem = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ITEM,
  };
};

export const setAmount = (amount) => {
  return {
    type: ActionTypes.SET_AMOUNT,
    payload: amount,
  };
};

export const removeAmount = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_AMOUNT,
  };
};

