import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import HomeScreen from '../screens/homes/homesccreen';
import CategoryScreen from '../screens/homes/CategoryScreen';
import CartScreen from '../screens/homes/CartScreen';
import AccountScreen from '../screens/homes/AccountScreen';
import {
  Cart,
  Categories,
  GreenAccount,
  GreenCart,
  GreenCategories,
  GreenHome,
  Homesvg,
  WCart,
} from '../assets/svgs/homeSvg';

const Tab = createBottomTabNavigator();
const MyTabs = props => {
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        headerLeft: () => <></>,
        unmountOnBlur: true,
        // lazy: true,
        tabBarActiveTintColor: '#14A384',
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 15,
          left: 15,
          right: 15,
          paddingBottom: 10,
          backgroundColor: '#000',
          borderRadius: 20,
          borderRightWidth: 0.5,
          borderLeftWidth: 0.5,
          borderTopWidth: 0.2,
          borderBottomWidth: 0.2,
          borderColor: '#14A384',
          paddingHorizontal: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (focused ? <GreenHome /> : <Homesvg />),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <GreenCategories /> : <Categories />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (focused ? <GreenCart /> : <WCart />),
        }}
      />
      <Tab.Screen
        name=" AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (focused ? <GreenAccount /> : <Cart />),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MyTabs;
