import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import axios from 'axios';
import response from '../../../response.json';
import HomeData from '../../components/HomeData';

const Home = () => {
  const [productData, setProductData] = useState([]);
  const apiUrl =
    'https://store.krenai.work/api/v4/product/customer?id=0&secondaryKey=&productName=&categoryName=&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=6&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=3ed28503-8aae-11ed-8ac6-0283a590984e';
  useEffect(() => {
    const fetchData = async () => {
      const resData = await axios({
        method: 'get',
        url: apiUrl,
      });
      // console.log(resData.data.object);
      setProductData(resData.data.object);
    };
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.navBar}>
        <Text style={{color: '#fff', fontSize: 25, fontWeight: '700'}}>
          Krenai
        </Text>
      </View>
      <ScrollView
        overScrollMode="never"
        onScrollAnimationEnd={{animated: false}}
        style={{height: '90%', marginBottom: 10}}
      >
        {productData.map(product => {
          return <HomeData product={product} key={product.id} />;
        })}
      </ScrollView>
    </>
  );
};

export default Home;
