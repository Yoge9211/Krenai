/* eslint-disable prettier/prettier */
import {DECREMENT_PRODUCT, INCREMENT_PRODUCT} from './constants';
const initialState = {count: 0};
export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PRODUCT:
      return {
        count: state.count + 1,
      };
    case DECREMENT_PRODUCT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
