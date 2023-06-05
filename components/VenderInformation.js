import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../assets/constatnts/Colors';
import {HeartOutline} from '../assets/svgs/AllIcons';
import {Avatar} from 'react-native-paper';
import Assets from '../assets';
import ButtonComponent from './ButtonComponent';
import {WIDTH} from '../assets/constatnts/Dimentions';

const VenderInformation = ({
  DiscText,
  btnpress,
  name,
  btntext,
  addtext,
  selllerid,
}) => {
  return (
    <View style={{paddingHorizontal: 15}}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 5}}>
              <Avatar.Image
                size={88}
                style={{}}
                source={Assets.Logos.avatarPlaceholder}
              />
            </View>
            <View style={{marginTop: 15, flexDirection: 'row'}}>
              <View style={{marginTop: 10}}>
                <Text
                  adjustsFontSizeToFit={true}
                  style={[styles.text, {fontSize: 16}]}>
                  {name}
                </Text>
                <Text
                  adjustsFontSizeToFit={true}
                  style={[styles.text, {fontSize: 16, color: Colors.Primary}]}>
                  {selllerid}
                </Text>
                <View style={[{flexDirection: 'row', paddingTop: 10}]}>
                  <View style={{paddingTop: 3}}>
                    <HeartOutline />
                  </View>
                  <Text
                    adjustsFontSizeToFit={true}
                    style={[styles.text, {fontSize: 14, paddingBottom: 10}]}>
                    {addtext}
                  </Text>
                </View>
              </View>
              <View style={{marginTop: 15}}>
                <ButtonComponent
                  btnfonSize={WIDTH <= 375 ? 12 : 16}
                  borderRadius={10}
                  buttonText={btntext}
                  buttonColor={Colors.Primary}
                  textColor={Colors.textColor.Primary}
                  onPress={btnpress}
                  // onPress={getApiData}
                  height={WIDTH <= 375 ? 40 : 41}
                  width={WIDTH <= 375 ? 90 : 118}
                />
              </View>
            </View>
          </View>
          <View style={{padding: 5}}>
            <Text
              style={[
                styles.text,
                {fontSize: 14, lineHeight: 25, fontFamily: 'Poppins-Light'},
              ]}>
              {DiscText}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VenderInformation;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.Tertiary,
    borderRadius: 20,
    // paddingHorizontal: 10,
  },
  content: {
    // marginTop: 25,
    // width: '100%',
  },
  mainview: {
    // paddingHorizontal: 15,
    width: '100%',
    // borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.Tertiary,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // paddingVertical: 5,
    borderBottomColor: Colors.Tertiary,
  },
  inputView: {marginVertical: 10, backgroundColor: '#000'},
  text: {
    color: Colors.textColor.Primary,
    paddingHorizontal: 5,
    fontFamily: 'Poppins-Regular',
  },
});
