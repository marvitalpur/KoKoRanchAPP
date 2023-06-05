import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../assets/constatnts/Colors';

const ButtonComponent = ({
  icon,
  buttonColor,
  textColor,
  onPress,
  buttonText,
  height,
  width,
  disabled,
  icon1,
  Icon1,
  SvgICon,
  paddingHorizontal,
  borderRadius,
  btnfonSize,
}) => {
  return (
    <TouchableRipple
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          height: height,
          width: width,
          backgroundColor: buttonColor,
          borderRadius: borderRadius,
        },
      ]}>
      <View
        style={{
          // width: '100%',
          // height: '100%',
          flexDirection: 'row',
          // alignItems: 'center',
          justifyContent: icon ? 'space-between' : 'center',
          // paddingHorizontal: 5,
        }}>
        {icon1 && (
          <>
            <View style={{margin: 5}}>
              <BookIcon />
            </View>
          </>
        )}

        <Text
          adjustsFontSizeToFit={true}
          style={{
            color: textColor,
            fontSize: btnfonSize,
            letterSpacing: 1,

            fontFamily: 'Poppins-Regular',
          }}>
          {buttonText}
        </Text>
        {SvgICon && (
          <View style={{paddingHorizontal: paddingHorizontal}}>{SvgICon}</View>
        )}

        {icon === 'logout' ? (
          <Icon name={icon} size={20} color={textColor} />
        ) : (
          <Icon name={icon} size={20} color={textColor} />
        )}
      </View>
    </TouchableRipple>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    justifyContent: 'center',
    shadowColor: Colors.Tertiary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
