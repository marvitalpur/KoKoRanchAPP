import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/auth/Splash';
import Login from '../screens/auth/Login';
import MyDrawer from './DrawerStack';
import SignUp from '../screens/auth/SignUp';
import SettingScreen from '../screens/homes/SettingScreen';
import NotificationsScreen from '../screens/homes/NotificationsScreen';
import ChangePassword from '../screens/auth/ChangePassword';
import ProductDescription from '../screens/homes/ProductDescription';
import CheckOutScreen from '../screens/homes/CheckoutScreen';
import PaymentScreen from '../screens/homes/PaymentScreen';
import OrderTrackScreen from '../screens/homes/OrderTrackScreen';
import TradeScreen from '../screens/homes/TradeProducts';
import LandscapingScreen from '../screens/homes/LandscapingScreen';
import VendorDetails from '../screens/homes/VendorDetails';
import PlantsScreen from '../screens/homes/plantsScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="PlantsScreen" component={PlantsScreen} />
      <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      <Stack.Screen name="ProductDescription" component={ProductDescription} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="OrderTrackScreen" component={OrderTrackScreen} />
      <Stack.Screen name="TradeScreen" component={TradeScreen} />
      <Stack.Screen name="VendorDetails" component={VendorDetails} />
      <Stack.Screen name="LandscapingScreen" component={LandscapingScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
