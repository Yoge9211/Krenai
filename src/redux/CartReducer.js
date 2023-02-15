/* eslint-disable prettier/prettier */
import {ADD_TO_CART, REMOVE_FROM_CART} from './constants';

export const CartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const deleteArray = state.filter((item, payload) => {
        return item.id !== action.payload.id;
      });
      return deleteArray;
    default:
      return state;
  }
};
