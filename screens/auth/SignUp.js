import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {WIDTH} from '../../assets/constatnts/Dimentions';
import Assets from '../../assets';
import {Colors} from '../../assets/constatnts/Colors';
import {LogoSvgs} from '../../assets/svgs/iconsSvgs';
import Icon from 'react-native-vector-icons/Feather';
import Inputs from '../../components/Inputs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import Popup from '../../components/Popup';
import DropdownComponent from '../../components/dropdwonCompo';

const SignUp = ({navigation}) => {
  // const [data, setData] = useState({
  //   username: '',
  //   password: '',
  // });
  const [rememberMe, setRememberMe] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUserName] = useState('');
  const [Email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [Pasword, setPassword] = useState('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Assets.BackgrounImages.bg1}
          resizeMode="cover"
          style={styles.image}>
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{marginTop: 25}}>
              <View>
                <HeaderComponent onPress={() => navigation.goBack()} />
              </View>
              <View style={styles.box}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LogoSvgs />
                  <Text style={styles.signuptext}>Sign Up as Buyer</Text>
                </View>
                <KeyboardAwareScrollView
                  keyboardShouldPersistTaps="handled"
                  enableOnAndroid={true}
                  enableAutomaticScroll={true}
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{flexGrow: 1}}>
                  <View
                    style={{
                      paddingHorizontal: 35,
                    }}>
                    <View style={{marginTop: 15}} />
                    <Text style={styles.inputstext}>First Name</Text>
                    <View style={{marginTop: 10}}>
                      <Inputs
                        fontSize={12}
                        placeholder="First Name"
                        textColor={Colors.textColor.Tertiary}
                        text={username}
                        setText={setUserName}
                      />
                    </View>
                    <View style={{marginTop: 5}} />
                    <Text style={styles.inputstext}>Last Name</Text>
                    <View style={{marginTop: 5}} />
                    <Inputs
                      placeholder="Last Name"
                      textColor={Colors.textColor.Tertiary}
                    />
                    <Text style={styles.inputstext}>Enter Email</Text>
                    <View style={{marginTop: 10}}>
                      <Inputs
                        fontSize={12}
                        placeholder="Enter Email"
                        textColor={Colors.textColor.Tertiary}
                        text={Email}
                        setText={setEmail}
                      />
                    </View>
                    <View style={{marginTop: 5}} />
                    <Text style={styles.inputstext}>Enter Phone Number</Text>
                    <View style={{marginTop: 5}} />
                    <View style={styles.inputView}>
                      <Inputs
                        index
                        fontSize={12}
                        placeholder=""
                        textColor={Colors.textColor.Tertiary}
                        text={Pasword}
                        setText={setPassword}
                        secureText={true}
                      />
                    </View>
                    <View style={{marginTop: 5}} />
                    <Text style={styles.inputstext}>Create New Password</Text>
                    <View style={{marginTop: 5}} />
                    <Inputs
                      fontSize={12}
                      placeholder="Enter Email"
                      textColor={Colors.textColor.Tertiary}
                      text={Pasword}
                      setText={setPassword}
                      secureText={true}
                    />
                    <Text style={styles.inputstext}>Confirm Password</Text>
                    <View style={{marginTop: 5}} />
                    <Inputs
                      fontSize={12}
                      placeholder="Enter Password"
                      textColor={Colors.textColor.Tertiary}
                      text={Pasword}
                      setText={setPassword}
                      secureText={true}
                    />
                    <View style={styles.inputstext}>
                      <TouchableOpacity
                        style={styles.touchable}
                        onPress={() => setRememberMe(!rememberMe)}>
                        <Icon
                          name={rememberMe ? 'check-square' : 'square'}
                          size={20}
                          color={
                            rememberMe
                              ? Colors.textColor.Tertiary
                              : Colors.textColor.basecolor
                          }
                        />
                        <Text
                          style={[
                            styles.text,
                            {
                              color: Colors.Tertiary,
                              paddingLeft: 10,
                              fontFamily: 'Poppins-Regular',
                            },
                          ]}>
                          I agree with the
                          <Text style={{color: Colors.Primary}}>
                            {' '}
                            Privacy Policy{' '}
                          </Text>{' '}
                          and
                          <Text style={{color: Colors.Primary}}>
                            {' '}
                            Terms and Conditions
                          </Text>
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={[
                        styles.touchable,
                        {alignSelf: 'center', paddingTop: 15},
                      ]}
                      onPress={() => navigation.navigate('Login')}>
                      <Text
                        style={[
                          styles.text,
                          {
                            paddingBottom: 15,
                            // textDecorationLine: 'underline',
                            color: Colors.textColor.Primary,
                            textAlign: 'center',
                            fontSize: 12,
                            fontFamily: 'Poppins-Regular',
                          },
                        ]}>
                        Already have an Account?
                        <Text style={{color: Colors.Primary}}> login </Text>
                      </Text>
                    </TouchableOpacity>
                    <View style={{alignSelf: 'center', paddingBottom: 15}}>
                      <ButtonComponent
                        btnfonSize={16}
                        borderRadius={50}
                        buttonText="Sign Up"
                        buttonColor={Colors.Primary}
                        textColor={Colors.textColor.Primary}
                        onPress={() => setModalVisible(!modalVisible)}
                        // onPress={getApiData}
                        height={WIDTH <= 375 ? 49 : 55}
                        width={WIDTH <= 375 ? 175 : 187}
                      />
                    </View>
                    <View style={{marginVertical: 25}}>
                      <Popup
                        modal2
                        btntext={'Continue'}
                        paragraph={
                          'Thank you for signing up. Confirmation Link Sent, Kindly Check Email'
                        }
                        modalVisible={modalVisible}
                        onPress={() => {
                          setModalVisible(false);
                          navigation.navigate('Login');
                        }}
                      />
                    </View>
                  </View>
                </KeyboardAwareScrollView>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
  },
  signuptext: {
    fontSize: 22,
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 15,
  },
  box: {
    opacity: 0.7,
    // height: HEIGHT / 1.3,
    borderRadius: 5,
  },
  IconMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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
    marginTop: 15,
  },
  inputstext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.textColor.Primary,
    marginTop: 15,
  },
  text: {
    fontSize: 14,
  },
});
