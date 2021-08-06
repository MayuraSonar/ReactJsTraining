import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../components/Cart/cartSlice';
import productsReducer from '../components/ProductIndex/productSlice';
const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;