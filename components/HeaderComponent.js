import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../assets/constatnts/Colors';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableRipple } from 'react-native-paper';
import { HeaderIcon } from '../assets/svgs/homeSvg';

const HeaderComponent = ({
  navigation,
  onPress,
  headtext1,
  headtext2,
  marginTop,
  rightIcon,
  fab,
}) => {
  return (
    <>
      <View style={styles.headerContainer}>
        {fab ? (
          <View style={styles.container}>
            <TouchableRipple onPress={onPress} style={styles.btn}>
              {/* <Text>ujhj</Text> */}
              <HeaderIcon />
              {/* <Icon name="menu" color={Colors.Primary} size={25} /> */}
            </TouchableRipple>
          </View>
        ) : (
          <TouchableOpacity onPress={onPress}>
            <Icon
              size={30}
              name="arrow-left"
              color={Colors.textColor.Primary}
              onPress={onPress}
            />
          </TouchableOpacity>
        )}
        <View style={styles.headtext}>
          <Text style={[styles.headingText, {}]}>{headtext1}</Text>
        </View>
        <View>
          {rightIcon && (
            <Icon
              size={30}
              name="heart"
              color={Colors.Primary}
              onPress={onPress}
            />
          )}
        </View>
      </View>
      <View style={{}}>
        <Text style={[styles.headingText, { textAlign: 'center' }]}>
          {headtext2}
        </Text>
      </View>
    </>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingTop: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  headtext: {
    // justifyContent: 'flex-end',
    // width: '80%',
    // marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Medium',
  },
  btn: {
    height: 45,
    width: 45,
    borderRadius: 10,
    // marginLeft: 20,
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.textColor.Primary,
    shadowColor: Colors.Primary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
