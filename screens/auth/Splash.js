import {
  StyleSheet,
  Text,
  Animated,
  Easing,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LogoSvgs} from '../../assets/svgs/iconsSvgs';
import {Colors} from '../../assets/constatnts/Colors';
import {HEIGHT, WIDTH} from '../../assets/constatnts/Dimentions';
import {useNavigation} from '@react-navigation/native';
const Splash = props => {
  const navigation = useNavigation();
  let rotateValueHolder = new Animated.Value(0);
  // const user = useSelector(state => state.user.loggedInUser);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };
  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 0],
    outputRange: ['0deg', '360deg'],
  });
  const myTimeout = setTimeout(startImageRotateFunction, 5000);
  useEffect(() => {
    startImageRotateFunction();
    const timer = setTimeout(() => {
      props.navigation.replace('Login');
    }, 500);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.image,
          {
            paddingTop: 25,
            alignSelf: 'center',
            transform: [{rotate: RotateData}],
          },
        ]}>
        <LogoSvgs />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    paddingTop: 15,
    backgroundColor: Colors.blackBg,
    opacity: 0.7,
    // width: WIDTH,
    height: HEIGHT / 1.8,
    // alignItems: 'center',
    marginTop: 25,
    borderRadius: 5,
  },
  touchable: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    letterSpacing: 0.7,
    color: Colors.textColor.TextColor1,
  },
  text: {
    fontSize: 14,
    color: Colors.textColor.TextColor1,
    fontWeight: '200',
  },
});
