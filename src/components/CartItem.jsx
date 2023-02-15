import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/cartItemStyle';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart} from '../redux/action';

import {DECREMENT_PRODUCT, INCREMENT_PRODUCT} from '../redux/constants';
const CartItem = props => {
  const catItem = useSelector(state => state.CounterReducer);
  console.log(catItem.count);
  const {item} = props;
  const dispatch = useDispatch();
  const handleDeleteBtn = data => {
    // console.log(data);
    dispatch(removeFromCart(data));
  };
  const handleIncrement = () => {
    dispatch({type: INCREMENT_PRODUCT});
  };
  const handleDecrement = () => {
    if (catItem.count == 0) {
      return;
    }
    dispatch({type: DECREMENT_PRODUCT});
  };
  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.image}>
        <Image
          style={{
            width: '95%',
            height: '98%',
            resizeMode: 'contain',
            paddingHorizontal: 20,
          }}
          source={require('../assets/POS.png')}
          alt="POS"
        />
      </View>
      <View style={styles.description}>
        <View style={styles.head}>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
            {item.name}
          </Text>
        </View>
        <View style={styles.variantAndSku}>
          <Text style={{fontSize: 17, color: 'gray', fontWeight: '500'}}>
            Variant : Red XL | SKU123{item.variants}
          </Text>
        </View>
        <View style={styles.price}>
          <Text style={{fontSize: 17, color: 'gray', fontWeight: '500'}}>
            Per unit:
          </Text>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>
            $43
          </Text>
          <Text style={{fontSize: 17, color: 'gray', fontWeight: '500'}}>
            | Total:
          </Text>
          <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>
            $86
          </Text>
        </View>
        <View style={styles.incrementAndDeleteBtn}>
          <View
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              paddingHorizontal: 10,
              flexDirection: 'row',
              height: '100%',

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity onPress={handleIncrement}>
              <Image
                style={{width: 35, height: 35}}
                source={require('../assets/plus.png')}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
              {catItem.count}
            </Text>
            <TouchableOpacity onPress={handleDecrement}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../assets/minus.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              handleDeleteBtn(item);
            }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'gray',
              height: 30,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{color: 'white'}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
