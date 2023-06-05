import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Assets from '../assets';
import Colors from '../assets/constatnts/Colors';
import {WIDTH} from '../assets/constatnts/Dimentions';
const ImageCard = ({index}) => {
  const [selectedItem, setSelectedItem] = useState(0);

  // Flat list data
  const data = [
    {
      id: '1',
      name: 'Landscaping',
      Image1: Assets.services.services1,
      icon1: 'arrow-right',
    },
    {
      id: '2',
      name: 'Lawn Mowing',
      Image1: Assets.services.services2,
      icon1: 'arrow-right',
    },
    {
      id: '3',
      name: 'Tree Services',
      Image1: Assets.services.services3,
      icon1: 'arrow-right',
    },
    {
      id: '4',
      name: 'Tractor Repair',
      Image1: Assets.services.services4,
      icon1: 'arrow-right',
    },
    {
      id: '5',
      name: 'Pest Control',
      Image1: Assets.services.services5,
      icon1: 'arrow-right',
    },
    {id: '6', name: 'All Services', icon1: 'arrow-right'},
  ];
  const data2 = [
    {
      id: '1',
      name: '100% Organic',
      Image1: Assets.DeliveryScrevice.DeliveryS1,
    },
    {
      id: '2',
      name: 'Free Shipping',
      Image1: Assets.DeliveryScrevice.DeliveryS2,
    },
    {
      id: '3',
      name: 'Certified Products',
      Image1: Assets.DeliveryScrevice.DeliveryS3,
    },
    {
      id: '4',
      name: 'Bonus System',
      Image1: Assets.DeliveryScrevice.DeliveryS4,
    },
  ];
  // Render item function
  const renderItem = ({item, index}) => {
    const isSelected = selectedItem === item.id;
    if (isSelected) {
      return (
        <TouchableOpacity
          onPress={() => setSelectedItem(item.id)}
          style={styles.selectedItemContainer}>
          <LinearGradient
            colors={[Colors.Primary2, Colors.Secondary2]}
            style={styles.selectedItemGradient}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={item.Image1} resizeMode="contain" style={{}} />
              <Text style={styles.itemText}>{item.name}</Text>
              <Icon name={item.icon1} size={24} color="#fff" />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => setSelectedItem(item.id)}
        style={styles.itemContainer}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={item.Image1} resizeMode="contain" style={{}} />
          <Text style={styles.itemText}>{item.name}</Text>
          <Icon name={item.icon1} size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {index ? (
        <FlatList
          numColumns={2}
          data={data}
          contentContainerStyle={{display: 'flex', flexGrow: 1}}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <FlatList
          numColumns={2}
          data={data2}
          contentContainerStyle={{display: 'flex', flexGrow: 1}}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    height: WIDTH <= 375 ? 140 : 150,
    width: WIDTH <= 375 ? 140 : 150,
    // marginVertical: 5,
    backgroundColor: Colors.basebg,
    borderRadius: 20,
    margin: 15,
    justifyContent: 'center',
    shadowColor: Colors.Secondary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 9.51,
    elevation: 15,
  },
  selectedItemContainer: {},
  selectedItemGradient: {
    height: WIDTH <= 375 ? 140 : 150,
    width: WIDTH <= 375 ? 140 : 150,
    // marginVertical: 5,
    backgroundColor: Colors.Secondary,
    borderRadius: 20,
    margin: 15,
    justifyContent: 'center',
  },
  itemContent: {
    // backgroundColor: '#00AA00',
    borderRadius: 20,
    justifyContent: 'center',
  },
  itemText: {
    color: 'white',
    fontSize: 12,
    paddingVertical: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    // padding: 50,
  },
});

export default ImageCard;
