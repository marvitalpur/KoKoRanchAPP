import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Assets from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import HeaderComponent from '../../components/HeaderComponent';
import Popup from '../../components/Popup';

const TradeScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  // console.log(image);
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
          <View style={{marginTop: 15}}>
            <HeaderComponent
              onPress={() => props.navigation.navigate('Home')}
              headtext2="Trade Products"
            />
          </View>
          <View style={styles.headtextView}>
            <View style={{}} />
            <View style={{width: '90%', height: 290}}>
              <Image
                source={Assets.products.product}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={styles.content}>
              <View style={{}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={[styles.text, {color: Colors.textColor.Primary}]}>
                    IN SEARCH OF:
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.Gtext}>Comments</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consetur sadipsg Elitrpsum dolor
                    .
                  </Text>
                  <Text
                    style={[styles.text, {color: Colors.textColor.Primary}]}>
                    IN SEARCH OF:
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consetur sadipsg Elitrpsum dolor
                    .
                  </Text>
                  <Text
                    style={[styles.text, {color: Colors.textColor.Primary}]}>
                    DETAILS:
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consetur sadipsg Elitrpsum dolor
                    .Lorem ipsum dolor sit amet, consetur sadipsg Elitrpsum
                    dolor .Lorem ipsum dolor sit amet, consetur sadipsg
                    Elitrpsum dolor .
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={[styles.text, {color: Colors.textColor.Primary}]}>
                      Seller:
                    </Text>
                    <Text style={{color: Colors.Tertiary}}>
                      Dec-12-2021 12:32 PM
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={[styles.text, {color: Colors.textColor.Primary}]}>
                      Mark Henry
                    </Text>
                    <View style={{padding: 5}}>
                      <Image
                        source={Assets.ICons.flage}
                        style={{width: 28, height: 18}}
                      />
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => setModalVisible2(!modalVisible2)}>
                  <Text style={styles.Gtext}>Contact vendor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('VendorDetails', {
                      trader: false,
                      trader: true,
                      seller: false,
                      headtext: 'Trade Details',
                      Name: 'Mark Henry',
                      selllerId: 'Seller021',
                      btntex: 'Contact Trader',
                      DicText: 'Trade Of Mark Henry',
                    })
                  }>
                  <Text style={styles.Gtext}>View All Trades</Text>
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <Popup
                  modal3
                  btntext={'Submit'}
                  paragraph={
                    'Thank you for signing up. Confirmation Link Sent, Kindly Check Email'
                  }
                  modalVisible={modalVisible}
                  onPress={() => {
                    setModalVisible(false);
                  }}
                />
                <Popup
                  index
                  modal5
                  headtext={'Message'}
                  btntext="Sent"
                  modalVisible={modalVisible2}
                  iconPress={() => setModalVisible2(false)}
                  btnPress={() => {
                    setModalVisible2(false), setModalVisible3(!modalVisible3);
                  }}
                />
                <Popup
                  modal2
                  padding1={45}
                  btntext="Continue"
                  paragraph={'Your Message Sent'}
                  modalVisible={modalVisible3}
                  onPress={() => {
                    setModalVisible3(!setModalVisible3);
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TradeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
  },
  headtextView: {
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 15,
  },
  headtext: {
    justifyContent: 'center',
    fontSize: 20,
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Medium',
  },

  content: {
    paddingTop: 15,

    width: '90%',
    alignSelf: 'center',
  },
  text: {
    paddingTop: 5,
    color: Colors.textColor.Tertiary,
    fontFamily: 'Poppins-Regular',
  },
  Gtext: {
    color: Colors.Primary,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
  },
  productimg: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
