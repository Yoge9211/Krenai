/* eslint-disable no-labels */
/* eslint-disable prettier/prettier */
import {
  ADD_TO_CART,
  DECREMENT_PRODUCT,
  INCREMENT_PRODUCT,
  REMOVE_FROM_CART,
} from './constants';

export const addToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});
export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const incrementProduct = () => {
  type: INCREMENT_PRODUCT;
  payload: '';
};

export const decrementProduct = () => {
  type: DECREMENT_PRODUCT;
  payload: '';
};
