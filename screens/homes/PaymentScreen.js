import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import Assets from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import Inputs from '../../components/Inputs';
import {HEIGHT, WIDTH} from '../../assets/constatnts/Dimentions';
import ButtonComponent from '../../components/ButtonComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderComponent from '../../components/HeaderComponent';
import CircleCard from '../../components/CircleCard/CirleCard';
const PaymentScreen = props => {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    country: '',
    city: '',
    state: '',
    Postalcode: '',
  });

  const [userName, setUSerName] = useState('');
  const [CardNumber, setCardNumber] = useState('');
  const [ExpriryDate, setExpriryDate] = useState('');
  const [Cvv, setCvv] = useState('');

  const imgdata = [{}, {}, {}, {}, {}, {}];
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
            <View style={styles.headtextView}>
              <View style={{}}>
                <HeaderComponent
                  onPress={() => props.navigation.goBack()}
                  headtext1={'Proceed To Pay'}
                />
              </View>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <View
                style={[
                  styles.mainview,
                  {
                    marginTop: 15,
                    borderWidth: 1,
                    width: '100%',
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
            <View style={{paddingHorizontal: 15}}>
              <CircleCard
                cards
                imgCard1={Assets.cards.card1}
                imgCard2={Assets.cards.card2}
                imgCard3={Assets.cards.card3}
                imgCard4={Assets.cards.card4}
                imgCard5={Assets.cards.card5}
                imgCard6={Assets.cards.card6}
              />
            </View>
            <View
              style={{
                marginVertical: 15,
                paddingHorizontal: 15,
                marginTop: 15,
              }}>
              <Text
                style={[
                  styles.headtext,
                  {fontSize: 18, fontFamily: 'Poppins-Medium'},
                ]}>
                Credit Card Info
              </Text>
              <View
                style={[
                  styles.maiview,
                  {
                    backgroundColor: Colors.inputBackground,
                    padding: 25,
                    marginTop: 25,
                    borderRadius: 20,
                  },
                ]}>
                <Text style={styles.text}>CARD NUMBER</Text>
                <View style={styles.inputView}>
                  <Inputs
                    placeholder="0000 0000 0000 0000"
                    textColor="#AAA"
                    text={CardNumber}
                    setText={setCardNumber}
                    ImgIcon={Assets.cards.card5}
                    width={30}
                    height={18}
                  />
                </View>
                <Text style={styles.text}>CARDHOLDER NAME</Text>
                <View style={styles.inputView}>
                  <Inputs
                    placeholder="Jon Doe"
                    textColor="#AAA"
                    text={userName}
                    setText={setUSerName}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: '45%'}}>
                    <Text style={styles.text}>EXPIRE DATE</Text>
                    <View style={styles.inputView}>
                      <Inputs
                        placeholder="05/22"
                        textColor="#AAA"
                        text={ExpriryDate}
                        setText={setExpriryDate}
                      />
                    </View>
                  </View>
                  <View style={{width: '45%'}}>
                    <Text style={styles.text}>CVV</Text>
                    <View style={styles.inputView}>
                      <Inputs
                        placeholder="000"
                        textColor="#AAA"
                        text={Cvv}
                        setText={setCvv}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{marginTop: 15, paddingBottom: 15, alignSelf: 'center'}}>
              <ButtonComponent
                btnfonSize={16}
                borderRadius={50}
                buttonText="Pay Now"
                buttonColor={Colors.Primary}
                textColor={Colors.textColor.Primary}
                onPress={() => props.navigation.navigate('OrderTrackScreen')}
                // onPress={getApiData}
                height={WIDTH <= 375 ? 53 : 53}
                width={WIDTH <= 375 ? 195 : 195}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default PaymentScreen;
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
    // borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.Tertiary,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  row: {
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: Colors.textColor.Primary,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginVertical: 10,
    color: Colors.textColor.Primary,
  },
});
