/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  homeDataCard: {
    width: '95%',
    maxHeight: '35%',
    // borderWidth: 1,
    // borderColor: 'red',
    marginHorizontal: '2.5%',
    marginBottom: 10,
    borderRadius: 10,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#fff4',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  imageAndDesc: {
    height: '70%',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    // borderWidth: 1,
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginLeft: 10,
  },
  desc: {
    width: '75%',
    // borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 25,
    marginTop: 10,
  },
  sizeAndColor: {
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    height: 40,
  },
  selling: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
  },
  addToCartBtn: {
    width: '100%',
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn: {
    paddingHorizontal: 20,
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  cartBtn: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
