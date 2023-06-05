import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import Colors from '../assets/constatnts/Colors';
import {CustomRating} from './MyRating';
import Assets from '../assets';
import {WIDTH} from '../assets/constatnts/Dimentions';

const ProductCompo = ({
  name,
  image,
  height,
  text2,
  text1,
  text3,
  text4,
  text5,
  Ratings1,
  cardCompo1,
  onPress,
}) => {
  const [rating, setRating] = useState(0);
  const handleRatingSelect = ratingValue => {
    setRating(ratingValue);
  };
  return (
    <>
      {cardCompo1 ? (
        <View style={styles.box}>
          <TouchableOpacity style={[{paddingTop: 5, paddingHorizontal: 10}]}>
            <View
              style={[{flexDirection: 'row', height: height, paddingTop: 15}]}>
              <Image
                source={image}
                resizeMode="contain"
                style={{width: 100, height: 100}}
              />
              <View style={{paddingTop: 5, paddingHorizontal: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: WIDTH <= 375 ? null : 'space-between',
                  }}>
                  <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={3}
                    style={[styles.productName, {fontSize: 14}]}>
                    {text1}
                  </Text>
                  <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={4}
                    style={[
                      styles.productName,
                      {fontSize: 12, paddingLeft: WIDTH <= 375 ? 25 : 0},
                    ]}>
                    {text2}
                  </Text>
                </View>
                <View style={{paddingTop: 5, flexDirection: 'row'}}>
                  {Ratings1 && (
                    <CustomRating
                      maxRating={7}
                      onRatingSelected={handleRatingSelect}
                    />
                  )}
                  <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={4}
                    style={[{fontSize: 10, color: Colors.textColor.Primary}]}>
                    (42)
                  </Text>
                </View>
                <Text style={[styles.paragraphText, {paddingTop: 5}]}>
                  Text 3 is a longer paragraph of text that should wrap{'\n'}
                  onto multiple lines if needed.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={{margin: 10}} onPress={onPress}>
          <View style={styles.box}>
            <Image source={Assets.products.productItem} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={[styles.text, styles.boldText]}>IN SEARCH OF:</Text>
              <Text style={styles.paragraphText}>
                Text 3 is a longer paragraph of text that should wrap{'\n'}
                onto multiple lines if needed.
              </Text>
              <Text style={[styles.text, styles.boldText]}>
                TO EXCHANGEWITH:
              </Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={6}
                style={styles.paragraphText}>
                Text 4 is another paragraph of text.{'\n'} It can have different
                styling and formatting as needed.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
export default ProductCompo;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    // backgroundColor: Colors.Primary2,
    shadowColor: Colors.textColor.Secondary,
    borderRadius: 25,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  productImage: {
    // justifyContent: 'center',
  },
  productName: {
    marginTop: 5,
    color: Colors.textColor.Primary,
    letterSpacing: 0.9,
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
  },
  productDesc: {
    fontSize: 12,
    marginTop: 5,
    color: Colors.textColor.Primary,
    textAlign: 'justify',
    fontFamily: 'Poppins-Regular',
    color: Colors.Tertiary,
  },
  box: {
    paddingBottom: 5,
    backgroundColor: Colors.Secondary,
    shadowColor: '#000',
    flexDirection: 'row',
    height: 148,
    // paddingHorizontal:5,
    borderRadius: 25,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  image: {
    width: 100,
    height: 148,
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  boldText: {
    fontWeight: 'bold',

    bottom: 2,
    lineHeight: 24,
    fontSize: 14,
    // marginVertical: 2,
  },
  paragraphText: {
    width: '75%',
    fontSize: 10,
    lineHeight: 14,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});
