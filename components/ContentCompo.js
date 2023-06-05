import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import ButtonComponent from './ButtonComponent';
import Assets from '../assets';
import Colors from '../assets/constatnts/Colors';
import {WIDTH} from '../assets/constatnts/Dimentions';

const ContentCompo = () => {
  return (
    <View>
      <View style={{marginTop: 25, paddingHorizontal: 15}}>
        <View style={styles.productimg}>
          <Image
            source={Assets.products.product2}
            resizeMode="contain"
            style={styles.img}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={[
              styles.text,
              {fontSize: 12, color: '#14A384', fontFamily: 'Poppins-Bold'},
            ]}>
            INFORMATION
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 20,
                paddingTop: 5,
                color: '#ffff',
                fontFamily: 'Poppins-Bold',
              },
            ]}>
            About KoKo Ranch
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 10,
                paddingTop: 15,
                color: '#D4D4D4',
                lineHeight: 16,
              },
            ]}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et nonumy eirmod
            tempor.
          </Text>
          <View style={{marginTop: 15}} />
          <ButtonComponent
            // btnfonSize={10}
            borderRadius={12}
            buttonText="Read more"
            buttonColor={Colors.Primary}
            textColor={Colors.textColor.Primary}
            // onPress={() => navigation.navigate('Drawer')}
            height={WIDTH <= 375 ? 35 : 35}
            width={WIDTH <= 375 ? 125 : 116}
          />
        </View>
      </View>
    </View>
  );
};

export default ContentCompo;

const styles = StyleSheet.create({
  coverimage: {
    height: 188,
    marginTop: 25,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  text: {
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
    fontFamily: 'Poppins-Regular',
  },

  productimg: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
