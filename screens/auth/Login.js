import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Assets from '../../assets';
import {Colors} from '../../assets/constatnts/Colors';
import {LogoSvgs} from '../../assets/svgs/iconsSvgs';
import Icon from 'react-native-vector-icons/Feather';
import ButtonComponent from '../../components/ButtonComponent';
import Inputs from '../../components/Inputs';
import {HEIGHT, WIDTH} from '../../assets/constatnts/Dimentions';
import {useDispatch} from 'react-redux';
import AlertMessage from '../../components/AlertMessage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const handleSignin = () => {
    console.log('check user is login');
    if (data['email'] !== '' && data['password'] !== '')
      if (ValidateEmail(data.email)) {
        console.log('Please enter valid email');
        return;
      }
    LoginAuth(data, {}, response => {
      console.log('data:', data);
      dispatch({type: signin, data});
      console.log('Test!');
      AlertMessage.showMessage('Login  Successfuly');
      navigation.replace('MyDrawer', {
        screen: 'HomeScreen',
      });
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              paddingTop: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LogoSvgs />
            <Text style={styles.logintext}> Login</Text>
          </View>
          <View style={{paddingHorizontal: 25}}>
            <View style={styles.box}>
              <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                enableOnAndroid={true}
                enableAutomaticScroll={true}
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}>
                <View style={{}}>
                  <View style={{marginTop: 10}} />
                  <Text style={styles.inputstext}> Enter Email or Phone </Text>
                  <View style={{marginTop: 10}}>
                    <Inputs
                      fontSize={12}
                      placeholder="Email or Phone"
                      text={data.email}
                      setText={setData}
                      formkey="Email"
                    />
                  </View>
                  <View style={{marginTop: 10}} />
                  <Text style={styles.inputstext}>Enter Password</Text>
                  <View style={{marginTop: 10}} />
                  <Inputs
                    fontSize={12}
                    placeholder="Enter Password"
                    text={data.password}
                    setText={setData}
                    formkey="password"
                    secureText={true}
                  />
                  <View style={styles.IconMainView}>
                    <TouchableOpacity
                      style={styles.touchable}
                      onPress={() => setRememberMe(!rememberMe)}>
                      <Icon
                        name={rememberMe ? 'square' : 'check-square'}
                        size={20}
                        color={
                          rememberMe
                            ? Colors.textColor.Primary
                            : Colors.textColor.Primary
                        }
                      />
                      <Text style={[styles.text, styles.rememberMeStyle]}>
                        Remember me
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ChangePassword')}
                      style={styles.touchable}>
                      <Text
                        style={[
                          styles.text,
                          {
                            textDecorationLine: 'underline',
                            color: Colors.textColor.Primary,
                            fontFamily: 'Poppins-Light',
                          },
                        ]}>
                        Forgot Password ?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bottomtext}>
                    <TouchableOpacity
                      style={[]}
                      onPress={() => navigation.navigate('SignUp')}>
                      <Text
                        style={[
                          styles.text,
                          {
                            // textDecorationLine: 'underline',
                            paddingTop: 15,
                            color: Colors.textColor.Primary,
                          },
                        ]}>
                        Don't Have An Account?
                        <Text
                          style={{
                            color: Colors.Primary,
                            fontFamily: 'Poppins-Regular',
                            fontSize: 12,
                          }}>
                          {' '}
                          Signup{' '}
                        </Text>
                      </Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 25}} />
                    <ButtonComponent
                      btnfonSize={16}
                      borderRadius={50}
                      buttonText="Login"
                      buttonColor={Colors.Primary}
                      textColor={Colors.textColor.Primary}
                      onPress={handleSignin}
                      // onPress={getApiData}
                      height={WIDTH <= 375 ? 49 : 55}
                      width={WIDTH <= 375 ? 175 : 187}
                    />
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
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
    fontFamily: 'Poppins-SemiBold',
    marginTop: 15,
  },
  box: {
    paddingTop: 15,
    opacity: 0.7,
    height: HEIGHT / 1.3,
    marginTop: 25,
    borderRadius: 5,
  },
  IconMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 15,
  },
  touchable: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '200',
    letterSpacing: 0.7,
    Colors: Colors.textColor.TextColor1,
  },
  bottomtext: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontFamily: 'Poppins-Bold',
    marginTop: 15,
  },
  inputstext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    // color: Colors.TextColor1.Primary,
    color: Colors.textColor.Primary,
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    marginVertical: 5,
    fontFamily: 'Poppins-Regular',
    // color: Colors.textColor.TextColor1,
  },
  rememberMeStyle: {
    marginLeft: 5,
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Light',
  },
});
