import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Assets from '../../assets';
import {Colors} from '../../assets/constatnts/Colors';
import ButtonComponent from '../../components/ButtonComponent';
import Inputs from '../../components/Inputs';
import {HEIGHT, WIDTH} from '../../assets/constatnts/Dimentions';
import HeaderComponent from '../../components/HeaderComponent';

const ChangePassword = props => {
  // const [data, setData] = useState({
  //   username: '',
  //   password: '',
  // });
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <View style={{paddingHorizontal: 15}}>
          <View style={{marginTop: 15}}>
            <HeaderComponent
              onPress={() => props.navigation.goBack()}
              headtext2="Change Password"
            />
          </View>
          <View style={styles.box}>
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps="handled"
              enableOnAndroid={true}
              enableAutomaticScroll={true}
              bounces={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}>
              <View
                style={{
                  paddingHorizontal: 15,
                }}>
                <View style={{marginTop: 25, paddingTop: 25}} />
                <Text style={styles.inputstext}>Current Password </Text>
                <View style={{marginTop: 10}}>
                  <Inputs
                    placeholder="Enter Current Password"
                    textColor="#AAA"
                    text={password}
                    setText={setPassword}
                    formkey="password"
                  />
                </View>
                <View style={{marginTop: 10}} />
                <Text style={styles.inputstext}>New Password</Text>
                <View style={{marginTop: 10}} />
                <Inputs
                  placeholder="Enter New Password"
                  textColor="#AAA"
                  text={password}
                  setText={setPassword}
                  formkey="password"
                />
                <View style={{marginTop: 10}} />
                <Text style={styles.inputstext}>Confirm Password</Text>
                <View style={{marginTop: 10}} />
                <Inputs
                  placeholder="Confirm Password"
                  textColor="#AAA"
                  text={password}
                  setText={setPassword}
                  formkey="password"
                />

                <View style={styles.bottomtext}>
                  <View style={{marginTop: 15, alignSelf: 'center'}}>
                    <ButtonComponent
                      btnfonSize={16}
                      borderRadius={50}
                      buttonText="Update"
                      buttonColor={Colors.Primary}
                      textColor={Colors.textColor.Primary}
                      onPress={() =>
                        props.navigation.replace('MyDrawer', {
                          screen: 'HomeScreen',
                        })
                      }
                      // onPress={getApiData}
                      height={WIDTH <= 375 ? 49 : 55}
                      width={WIDTH <= 375 ? 195 : 239}
                    />
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChangePassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
  },
  logintext: {
    fontSize: 22,
    color: Colors.textColor.Primary,
  },

  bottomtext: {
    flex: 1,

    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  inputstext: {
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textColor.Primary,
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    // color: Colors.textColor.TextColor1,
  },
});
