/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cartItemContainer: {
    width: '94%',
    height: 180,
    // borderWidth: 2,
    marginHorizontal: '3%',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#fff4',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 10,
  },
  image: {
    width: '25%',
    // borderWidth: 1,
    height: '100%',
    borderColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  description: {
    display: 'flex',
    width: '75%',
    // borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  head: {
    height: '20%',
    paddingTop: 8,
  },
  variantAndSku: {
    height: '25%',
    paddingTop: 8,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    height: '25%',
  },
  incrementAndDeleteBtn: {
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
