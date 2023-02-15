import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import styles from '../styles/homeData';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/action';

const HomeData = props => {
  const dispatch = useDispatch();
  const {product} = props;
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const [cartData, setCartData] = useState({
    id: product.id,
    description: product.description,
    keywords: product.keywords,
    mediaUrl: product.mediaUrl,
    category: product.category,
    name: product.name,
    rating: product.rating,
    sellingPrice: product.sellingPrice,
    mrp: product.mrp,
    promotionalTag: product.promotionalTag,
    addedVariant: product.addedVariant,
    inWishlist: product.inWishlist,
    variants: variant,
  });
  const [variant, setVariant] = useState();
  const handleAddCartButtonClick = data => {
    dispatch(addToCart(data));
    console.log(data);
    console.log(variant);
  };

  return (
    <View style={styles.homeDataCard}>
      <View style={styles.imageAndDesc}>
        <View style={styles.img}>
          <Image
            style={{width: '90%', height: '80%', alignSelf: 'center'}}
            source={require('../assets/POS.png')}
            alt=""
          />
        </View>
        <View style={styles.desc}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{fontSize: 18, fontWeight: '700', color: 'black'}}
          >
            {product.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: '700',
              marginBottom: 5,
            }}
          >
            SweatShirt for women{' '}
          </Text>
          <View style={styles.sizeAndColor}>
            <View
              style={{
                width: '45%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'gray',
                borderRadius: 15,
                justifyContent: 'space-evenly',
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: 'black',
                  fontWeight: '600',
                }}
              >
                Size : {size.split(',')[0]}
              </Text>
              <View
                style={{
                  width: 30,
                  height: 30,
                  // borderWidth: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  // alignItems: 'center',
                }}
              >
                <Picker
                  itemStyle={{color: 'black'}}
                  selectedValue={size}
                  onValueChange={(itemValue, itemIndex) => {
                    setSize(itemValue);
                    setVariant(itemValue);
                  }}
                >
                  {product.variants.map(variant => {
                    return (
                      <Picker.Item
                        label={variant.variant}
                        value={variant.variant}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <View
              style={{
                width: '42%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'gray',
                borderRadius: 15,
                justifyContent: 'space-evenly',
                marginRight: 5,
              }}
            >
              <Text style={{fontSize: 14, color: 'black', fontWeight: '600'}}>
                Color : {size.split(',')[1]}
              </Text>
              <View
                style={{
                  width: 30,
                  height: 30,
                  display: 'flex',
                  justifyContent: 'center',
                  // alignItems: 'center',
                }}
              >
                <Picker
                  itemStyle={{color: 'black'}}
                  selectedValue={size}
                  onValueChange={(itemValue, itemIndex) => setSize(itemValue)}
                >
                  {product.variants.map(variant => {
                    return (
                      <Picker.Item
                        label={variant.variant}
                        value={variant.variant}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.selling}>
            <Text
              style={{
                marginRight: '10%',
                fontSize: 15,
                fontWeight: '700',
                color: 'black',
              }}
            >
              Selling price:$43
            </Text>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>
              MRP:$56
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.addToCartBtn}>
        <TouchableOpacity
          onPress={() => {
            handleAddCartButtonClick(cartData);
          }}
          style={styles.Btn}
        >
          <Text style={styles.cartBtn}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeData;
