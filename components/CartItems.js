import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Colors from '../assets/constatnts/Colors';
import {WIDTH} from '../assets/constatnts/Dimentions';
import Assets from '../assets';
import {FAB} from 'react-native-paper';

const CartItems = ({index, decrement, count, increment}) => {
  return (
    <View
      style={[
        styles.card,
        {
          marginRight: index % 2 == 0 ? 5 : 2,
          marginRight: index % 2 == 0 ? 5 : 2,
        },
      ]}>
      <View>
        <View style={styles.productimg}>
          <Image
            source={Assets.products.oilbotel1}
            style={{
              width: WIDTH / 6.5,
              height: WIDTH / 6,
              backgroundColor: 'pink',
            }}
          />
          <View style={styles.texView}>
            <Text numberOfLines={1} style={[styles.producttext, styles.text]}>
              Product Name
            </Text>
            <Text numberOfLines={1} style={[styles.producttext]}>
              USD: $20.00
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={[
            styles.headerContainer,
            {
              marginTop: 35,
              flexDirection: 'row',
              // paddingBottom: 12,
            },
          ]}>
          <FAB
            style={[styles.fab, styles.babstyle2]}
            size="medium"
            icon="minus"
            color="white"
            onPress={decrement}
          />
          <View
            style={{
              borderWidth: 2,
              borderColor: '#fff',
              marginHorizontal: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}>
            <Text style={{color: Colors.textColor.Primary}}>{count}</Text>
          </View>
          <FAB
            style={[styles.fab, styles.babstyle2]}
            size="medium"
            icon="plus"
            color="white"
            onPress={increment}
          />
        </View>
      </View>
    </View>
  );
};
export default CartItems;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 81,
    marginTop: 15,
    // paddingBottom: 10,
    borderWidth: 1,
    borderColor: Colors.Tertiary,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
  },
  fab: {
    height: 48,
    width: 51,
    borderRadius: 5,
    margin: 1,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  babstyle2: {
    // opacity: 0.5,

    height: WIDTH < 375 ? 27 : 27,
    width: WIDTH < 375 ? 22 : 22,
    color: '#FFFF',
  },
  texView: {width: WIDTH / 2.6, marginTop: 15, paddingLeft: 25},
  name: {fontSize: 16, lineHeight: 21, fontFamily: 'Poppins-Regular'},

  producttext: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins-Medium',
    color: Colors.textColor.Primary,
  },
  productimg: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
