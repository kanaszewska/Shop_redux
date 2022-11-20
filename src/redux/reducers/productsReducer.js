import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [],
};
const intialStateItem = {
  items: [],
};
const intialStateAmount = {
  amount: "1",
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const itemsReducer = (state = intialStateItem, { type, payload }) => {
  const index = state.items.findIndex((todo) => todo.id === payload.id);
  switch (type) {
    case ActionTypes.SET_ITEM:
      if (index === -1) {
        payload.amount = 1;
        return { ...state, items: [...state.items, payload] };
      } else {
        const newArray = [...state.items];
        newArray[index].amount += 1;
        return {
          ...state,
          items: newArray,
        };
      }
    case ActionTypes.ADD_AMOUNT_ITEM:
      const newArray = [...state.items];
      newArray[index].amount += 1;
      return {
        ...state,
        items: newArray,
      };
    case ActionTypes.REMOVE_AMOUNT_ITEM:
      const newArray1 = [...state.items];
      if (newArray1[index].amount > 1) {
        newArray1[index].amount -= 1;
        return {
          ...state,
          items: newArray1,
        };
      } else {
        const filteredTodos = state.items.filter(
          (todo) => todo.id !== payload.id
        );
        return {
          ...state,
          items: filteredTodos,
        };
      }
    default:
      return state;
  }
};

export const removeSelectedItem = (
  state = intialStateItem,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.REMOVE_SELECTED_ITEM:
      const filteredTodos = state.items.filter(
        (todo) => todo.id !== payload.id
      );
      return {
        ...state,
        items: filteredTodos,
      };
    default:
      return state;
  }
};

export const amountReducer = (state = intialStateAmount, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_AMOUNT:
      return { ...state, amount: payload };
    default:
      return state;
  }
};

export const selectedItemsAmount = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.REMOVE_SELECTED_AMOUNT:
      return {};
    default:
      return state;
  }
};
