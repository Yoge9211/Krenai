/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './src/styles/appStyles.jsx';

import HomeScreen from './src/screens/Home/Home';
import CartScreen from './src/screens/Cart/Cart';

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeScreen}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#121e52',
            height: 55,
            borderTopRightRadius: 26,
            borderTopLeftRadius: 26,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View style={styles.focusedHomeStyle}>
                  <Text style={styles.focusedTextStyle}>Home</Text>
                </View>
              ) : (
                <Text style={styles.textStyle}>Home</Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={CartScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View style={styles.focusedCartStyle}>
                  <Text style={styles.focusedTextStyle}>Cart</Text>
                </View>
              ) : (
                <Text style={styles.textStyle}>Cart</Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
