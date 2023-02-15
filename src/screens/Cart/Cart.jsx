import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import CartItem from '../../components/CartItem';
import {useSelector} from 'react-redux';
const Cart = () => {
  const cartData = useSelector(state => state.CartReducer);

  return (
    <>
      <View style={styles.navBar}>
        <Text style={{color: '#fff', fontSize: 25, fontWeight: '700'}}>
          Cart
        </Text>
      </View>
      <ScrollView
        style={{height: '100%', flex: 1, backgroundColor: 'white'}}
        overScrollMode="never"
        onScrollAnimationEnd={{animated: false}}
      >
        {cartData &&
          cartData.map(item => {
            return <CartItem key={item.id} item={item} />;
          })}
      </ScrollView>
    </>
  );
};

export default Cart;
