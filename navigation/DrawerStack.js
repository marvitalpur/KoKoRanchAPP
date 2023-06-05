import {StyleSheet, Text, Image, View, Settings} from 'react-native';
import React, {useState} from 'react';
import MyTabs from './TabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import Assets from '../assets';
import {LogoSvgs, SearchIcon} from '../assets/svgs/iconsSvgs';
import {Avatar, TouchableRipple} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native';
import Colors from '../assets/constatnts/Colors';
import {WIDTH} from '../assets/constatnts/Dimentions';
import {
  Cart,
  Categories,
  Category,
  GreenCategory,
  Home,
  HomeICon,
  LogOut,
  Phone,
  Setting,
  Tractor,
} from '../assets/svgs/Drawersvg';

import HomeScreen from '../screens/homes/homesccreen';
import CategoryScreen from '../screens/homes/CategoryScreen';
import ContactUS from '../screens/auth/ContactUS';
import SettingScreen from '../screens/homes/SettingScreen';
import AgriculturalProduts from '../screens/homes/AgriculturalProduts';
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
        drawerStyle: {width: WIDTH / 1.5},
      }}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <Drawer.Screen name="Contact us" component={ContactUS} />
      <Drawer.Screen
        name="Agricultural Services"
        component={AgriculturalProduts}
      />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
const CustomDrawerContent = props => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingLeft: 25}}>
        <View
          style={{
            // paddingHorizontal: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 25,
          }}>
          <View style={{}}>
            <View style={{paddingBottom: 25, alignSelf: 'center'}}>
              <LogoSvgs />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '600',
                fontSize: 16,
                color: Colors.textColor.Primary,
              }}>
              Menu
            </Text>
          </View>
          {/* <SidebarButton /> */}
        </View>
        <View style={{paddingTop: 15}}>
          <View style={styles.tab}>
            <Image source={Assets.Logos.profile} />
            <Text
              style={{
                textAlign: 'center',
                // fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 12,
                color: Colors.textColor.Primary,
                letterSpacing: 0.9,
                // marginTop: 10,
                paddingLeft: 15,
              }}>
              Hi , Alex Martina
            </Text>
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              // backgroundColor: 'red',
            }}
            numColumns={2}
            ItemSeparatorComponent={<View style={{}} />}
            data={sidebarData}
            scrollEnabled={false}
            renderItem={({item, index}) => (
              <View style={{paddingHorizontal: 3, paddingVertical: 5}}>
                <SidebarButton
                  item={item}
                  index={index}
                  Icon1={item.Icon1}
                  setActiveButton={setActiveButton}
                  activeButton={activeButton}
                  navigation={props.navigation}
                />
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.replace('Login')}
          style={{paddingTop: 15}}>
          <View style={styles.tab}>
            <View style={{paddingRight: 15}}>
              <LogOut />
            </View>
            <Text
              style={{
                textAlign: 'center',
                // fontFamily: Fonts.default,
                fontWeight: '600',
                fontSize: 12,
                color: Colors.textColor.Primary,
                letterSpacing: 0.9,
                // marginTop: 10,
              }}>
              Lougout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const data = [{}, {}, {}];
const SidebarButton = ({
  activeButton,
  setActiveButton,
  item,
  index,
  navigation,
  Icon1,
}) => {
  return (
    <View style={styles.btntab}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setActiveButton(index);
          navigation.navigate(item.screen);
        }}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{}}>{Icon1}</View>
        <Text style={styles.tabtext}>{item.screen}</Text>
      </TouchableOpacity>
    </View>
  );
};
const sidebarData = [
  {
    id: 1,
    screen: 'Home',
    Icon1: <HomeICon />,
  },
  {
    id: 2,
    screen: 'Categories',
    Icon1: <Category />,
  },
  {
    id: 3,
    screen: 'Setting',
    Icon1: <Setting />,
  },
  {
    id: 4,
    screen: 'Agricultural Services',
    Icon1: <Tractor />,
  },
  {
    id: 5,
    screen: 'Contact us',
    Icon1: <Phone />,
  },
  {id: 6, screen: 'Cart', Icon1: <Cart />},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  btntab: {
    width: 92,
    // backgroundColor: 'green',
    borderWidth: 1,
    borderColor: '#707070',
    height: 91,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    // elevation: 12,
  },
  tab: {
    width: 200,
    // backgroundColor: 'green',
    borderWidth: 1,
    borderColor: '#707070',
    height: 56,
    borderRadius: 10,
    // justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    // elevation: 12,
  },
  image: {flex: 1},
  tabtext: {
    textAlign: 'center',
    // fontFamily: Fonts.default,
    fontWeight: '600',
    fontSize: 12,
    color: Colors.textColor.Primary,
    letterSpacing: 0.9,
    // marginTop: 10,},
  },
});
