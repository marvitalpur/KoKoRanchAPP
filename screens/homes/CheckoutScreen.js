import {StyleSheet, Text, View, TextInput, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import Assets from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import Inputs from '../../components/Inputs';
import {HEIGHT, WIDTH} from '../../assets/constatnts/Dimentions';
import ButtonComponent from '../../components/ButtonComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderComponent from '../../components/HeaderComponent';
import DropdownComponent from '../../components/dropdwonCompo';
const CheckOutScreen = props => {
  const [username, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, SetAddress] = useState('');
  const [Country, setCountry] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');
  const [postaclcode, setPostalCode] = useState('');
  const [orderNote, setOrderNote] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <View style={{}}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{marginTop: 15}}>
              <HeaderComponent
                onPress={() => props.navigation.goBack()}
                headtext1={'Checkout'}
              />
            </View>
            <View style={{paddingHorizontal: 15}}>
              <View
                style={[
                  styles.mainview,
                  {
                    marginTop: 15,
                    borderWidth: 1,
                    width: '100%',
                    // backgroundColor: 'rgb(0,0,0.4)',
                    // opacity: 0.55,
                    // padding: 15,
                  },
                ]}>
                <View style={styles.content}>
                  <Text
                    style={[
                      styles.text,
                      {fontSize: 16, fontFamily: 'Poppins-Medium'},
                    ]}>
                    Summary
                  </Text>
                  <View style={[styles.row, {borderBottomWidth: 1}]}>
                    <Text style={[styles.text, {fontSize: 12}]}>
                      Price (3 items)
                    </Text>
                    <Text style={[styles.text, {fontSize: 12}]}>$66</Text>
                  </View>
                  <View style={[styles.row, {borderBottomWidth: 1}]}>
                    <Text style={[styles.text, {fontSize: 12}]}>
                      Delivery Charge
                    </Text>
                    <Text style={[styles.text, {fontSize: 12}]}>$3.52</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={[styles.text, {fontSize: 12}]}>
                      Total Price
                    </Text>
                    <Text style={[styles.text, {fontSize: 12}]}>$69.52</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: 25, paddingHorizontal: 15}}>
              <Text style={[styles.headtext, {fontFamily: 'Poppins-Medium'}]}>
                Shipping Details
              </Text>
              <View
                style={[
                  styles.maiview,
                  {
                    backgroundColor: Colors.inputBackground,
                    opacity: 0.75,
                    padding: 25,
                    borderRadius: 20,
                    marginTop: 20,
                  },
                ]}>
                <Text style={styles.text}>First Name</Text>
                <View style={styles.inputView}>
                  <Inputs
                    fontSize={12}
                    placeholder="Last Name"
                    textColor="#AAA"
                    text={username}
                    setText={setUserName}
                  />
                </View>
                <Text style={styles.text}>Last Name</Text>
                <View style={styles.inputView}>
                  <Inputs
                    fontSize={12}
                    placeholder="Last Name"
                    textColor="#AAA"
                    text={username}
                    setText={setUserName}
                  />
                </View>
                <Text style={styles.text}>Complete Address</Text>
                <View style={[styles.textInput, {height: 150, marginTop: 15}]}>
                  <TextInput
                    placeholder="Enter something..."
                    placeholderTextColor={Colors.Tertiary}
                    style={{paddingHorizontal: 15}}
                  />
                </View>
                <View style={{marginTop: 15}} />
                <Text style={styles.text}>Country</Text>
                <View style={styles.inputView}>
                  <DropdownComponent
                    text1={'USA'}
                    text2={'China'}
                    text3={'India'}
                    text4={'Pakistan'}
                  />
                </View>
                <Text style={styles.text}>City</Text>
                <View style={styles.inputView}>
                  <Inputs
                    fontSize={12}
                    placeholder="Enter your City"
                    textColor="#AAA"
                    text={City}
                    setText={setCity}
                  />
                </View>
                <Text style={styles.text}>State/Province/Region</Text>
                <View style={styles.inputView}>
                  <Inputs
                    fontSize={12}
                    placeholder="Enter State/Province/Region"
                    textColor="#AAA"
                    text={State}
                    setText={setState}
                  />
                </View>

                <Text style={styles.text}>Zip Code/Postal Code</Text>
                <View style={styles.inputView}>
                  <Inputs
                    fontSize={12}
                    placeholder="Enter Zip Code/Postal Code"
                    textColor="#AAA"
                    text={postaclcode}
                    setText={setPostalCode}
                  />
                </View>
                <Text style={styles.text}>Email</Text>
                <View style={styles.inputView}>
                  <Inputs
                    fontSize={12}
                    placeholder="Enter Your Email"
                    textColor="#AAA"
                    text={Email}
                    setText={setEmail}
                  />
                </View>
                <Text style={styles.text}>Phone</Text>
                <View style={styles.inputView}>
                  <Inputs
                    fontSize={12}
                    placeholder=" Enter your Phone number"
                    textColor="#AAA"
                    text={Phone}
                    setText={setPhone}
                  />
                </View>
                <Text style={styles.text}>Order Note</Text>
                <View style={styles.inputView}>
                  <Inputs
                    fontSize={12}
                    placeholder=" Notes about your order, e.g. about delivery."
                    textColor="#AAA"
                    text={orderNote}
                    setText={setOrderNote}
                  />
                </View>
              </View>
              <View
                style={{marginTop: 5, paddingBottom: 15, alignSelf: 'center'}}>
                <ButtonComponent
                  btnfonSize={16}
                  borderRadius={50}
                  buttonText="Proceed to Pay"
                  buttonColor={Colors.Primary}
                  textColor={Colors.textColor.Primary}
                  onPress={() => props.navigation.navigate('PaymentScreen')}
                  // onPress={getApiData}
                  height={WIDTH <= 375 ? 49 : 55}
                  width={WIDTH <= 375 ? 195 : 195}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default CheckOutScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
  },
  headtextView: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 25,
  },
  headtext: {
    justifyContent: 'center',
    fontSize: 20,
    color: Colors.textColor.Primary,
  },
  content: {
    marginTop: 25,
    width: '100%',
  },
  mainview: {
    paddingHorizontal: 15,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.Tertiary,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  row: {
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottomColor: Colors.textColor.Primary,
  },
  inputView: {marginVertical: 10},
  text: {
    color: Colors.textColor.Primary,
    marginVertical: 5,
    fontFamily: 'Poppins-Regular',
  },
  textview5: {
    // marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.basebg,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.Tertiary,
    borderRadius: 5,
  },
});
