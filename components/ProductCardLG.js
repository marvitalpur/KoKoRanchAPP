import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const ProductCardlg = ({CardImageBGMain}) => {
  const navigation = useNavigation;
  return (
    <View style={{flex: 1, marginTop: 25, paddingHorizontal: 15}}>
      <ImageBackground
        source={CardImageBGMain}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
    </View>
  );
};

export default ProductCardlg;

const styles = StyleSheet.create({
  image: {
    height: 188,
  },
});
