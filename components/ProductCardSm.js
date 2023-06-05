import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from './ProductCard';
import Assets from '../assets';
import { WIDTH } from '../assets/constatnts/Dimentions';
import Colors from '../assets/constatnts/Colors';

const ProductCardSm = ({ onPress, text1, text2, text3, Text2, text }) => {
  return (
    <TouchableOpacity activeOpacity={0} onPress={onPress} style={{}}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.hradertext, {}]}>{text1}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={[
                styles.hradertext,
                { borderBottomWidth: 2, borderColor: Colors.Primary },
              ]}>
              {text2}
            </Text>
            {Text2 && (
              <Text
                style={[{ color: Colors.Tertiary, padding: 8, fontSize: 14 }]}>
                {text}
              </Text>
            )}
          </View>
        </View>
        <TouchableRipple onPress={onPress}>
          <Text style={[styles.seealltext]}>{text3}</Text>
        </TouchableRipple>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCardSm;
const styles = StyleSheet.create({
  hradertext: {
    // paddingTop: 25,
    color: Colors.textColor.Primary,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Poppins-Bold',
  },
  seealltext: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: Colors.textColor.Primary,
  },
  header: {
    // backgroundColor: 'pink',
    // paddingHorizontal: 25,
    marginTop: WIDTH < 375 ? 25 : 30,
    // marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
