import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import Colors from '../assets/constatnts/Colors';
import {CustomRating} from './MyRating';

const ProductCard = ({
  navigation,
  name,
  image,
  description,
  ratings,
  price,
  index,
  fontWeight,
  borderRadius,
  height,
  Ratingsline,
  backgroundColor,
  width,
  color,
  products,
  text2,
  text1,
  fontSize,
  card1,
  card2,
  arrowicon,
  Title,
  onPress,
}) => {
  const [rating, setRating] = useState(0);

  const handleRatingSelect = ratingValue => {
    setRating(ratingValue);
  };
  // console.log(image);
  return (
    <>
      {card1 && (
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.card,
            {
              width: width,
              height: height,
              backgroundColor: backgroundColor,
              borderRadius: borderRadius,
              marginRight: index % 2 == 0 ? 5 : 0,
              marginLeft: index % 2 == 0 ? 0 : 0,
            },
          ]}>
          <View style={[styles.productImage, {}]}>
            <Image
              source={image}
              resizeMode="contain"
              style={{width: '100%', height: '100%', alignSelf: 'center'}}
            />
          </View>
          <View style={{paddingBottom: 20, paddingHorizontal: 10}}>
            <Text
              numberOfLines={1}
              style={[
                styles.productName,
                {
                  fontWeight: fontWeight,
                  textAlign: 'center',
                  color: color,
                  fontSize: fontSize,
                  fontFamily: 'Poppins-SemiBold',
                },
              ]}>
              {name}
            </Text>
            <Text numberOfLines={3} style={styles.productDesc}>
              {description}
            </Text>
            <View style={styles.priceBox}>
              <Text
                style={[styles.priceText, {color: Colors.textColor.Primary}]}>
                {text1}
              </Text>
              <Text
                style={[
                  styles.priceText,
                  {
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                  },
                ]}>
                {text2}
              </Text>
            </View>
            {Ratingsline && (
              <>
                <View style={styles.priceBox}>
                  <View style={styles.priceBox}>
                    <View style={styles.container}>
                      <CustomRating
                        maxRating={7}
                        onRatingSelected={handleRatingSelect}
                      />
                    </View>
                  </View>
                  <Text
                    numberOfLines={2}
                    style={[
                      styles.priceText,
                      {
                        color: Colors.Primary,
                      },
                    ]}>
                    In Stock
                  </Text>
                </View>
              </>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
export default ProductCard;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    shadowColor: Colors.textColor.Secondary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  productImage: {
    width: 154,
    height: 118,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    width: '100%',

    fontFamily: '',
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
  },
  productDesc: {
    paddingTop: 10,
    width: '100%',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: Colors.Tertiary,
  },
  priceBox: {
    // paddingTop: 5,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Poppins-SemiBold',
  },
  priceText: {
    textAlign: 'center',
    fontSize: 10,
    color: '#fff',
    color: Colors.Tertiary,
    fontFamily: 'Poppins-SemiBold',
  },
});
