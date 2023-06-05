import {
  StyleSheet,
  Image,
  FlatList,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import React from 'react';
import Assets from '../assets';
import Colors from '../assets/constatnts/Colors';
import ButtonComponent from './ButtonComponent';
import {WIDTH} from '../assets/constatnts/Dimentions';

const CoverImgCard = ({
  coverimage,
  backgroundColor,
  opacity,
  textName,
  textDisc,
  borderRadius,
  textAlign,
  paddingTop,
  fontSize,
  marginTop,
  index,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} textbx source={coverimage}>
        {index ? (
          <View
            style={{
              backgroundColor: backgroundColor,
              borderRadius: borderRadius,
              opacity: opacity,
              marginTop: marginTop,
            }}>
            <Text
              style={[
                styles.text,
                {
                  textAlign: textAlign,
                  paddingTop: paddingTop,
                  fontSize: fontSize,
                },
              ]}>
              {textName}
            </Text>
            <Text
              style={[
                styles.text,
                {paddingVertical: 15, textAlign: textAlign},
              ]}>
              {textDisc}
            </Text>
          </View>
        ) : (
          <>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ButtonComponent
                btnfonSize={16}
                borderRadius={10}
                buttonText="Post Your Add"
                buttonColor={Colors.Primary}
                textColor={Colors.textColor.Primary}
                height={WIDTH <= 375 ? 55 : 55}
                width={WIDTH <= 375 ? 157 : 175}
              />
            </View>
          </>
        )}
      </ImageBackground>
    </View>
  );
};

export default CoverImgCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,

    marginTop: 15,
    paddingTop: 15,
  },
  bgImage: {
    flex: 1,
    // backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingTop: 25,
    borderRadius: 50,
  },

  text: {
    fontFamily: 'Poppins-SemiBold',
    // paddingHorizontal: 25,
    fontSize: 12,
    color: Colors.textColor.Primary,
    letterSpacing: 0.9,
    lineHeight: 20,
  },
});
