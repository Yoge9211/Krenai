/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {createStore, combineReducers} from 'redux';
import {CartReducer} from './CartReducer';
import {CounterReducer} from './CounterReducer';

const rootReducer = combineReducers({
  CartReducer,
  CounterReducer,
});
const store = createStore(rootReducer);
export default store;
