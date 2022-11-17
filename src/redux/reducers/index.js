import { combineReducers } from 'redux'
import {
  productsReducer,
  selectedProductsReducer,
  itemsReducer,
  amountReducer,
} from './productsReducer'
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  products: itemsReducer,
  amount: amountReducer,
})
export default reducers
