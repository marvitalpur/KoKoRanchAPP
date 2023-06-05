import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Assets from '../../assets';
import { Colors } from '../../assets/constatnts/Colors';
import ButtonComponent from '../../components/ButtonComponent';
import Inputs from '../../components/Inputs';
import { HEIGHT, WIDTH } from '../../assets/constatnts/Dimentions';
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Location,
  Phone,
  Twitter,

} from '../../assets/svgs/AllIcons';
import HeaderComponent from '../../components/HeaderComponent';

const ContactUS = props => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <View style={{ marginTop: 15 }}>
          <View style={styles.box}>
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps="handled"
              enableOnAndroid={true}
              enableAutomaticScroll={true}
              bounces={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}>
              <HeaderComponent
                onPress={() => props.navigation.navigate('Home')}
                headtext2="Contact"
              />
              <View
                style={{
                  paddingHorizontal: 25,
                }}>
                <View style={{ marginTop: 10 }} />
                <Text style={styles.text}>Enter Your Name</Text>
                <View style={{ marginTop: 10 }}>
                  <Inputs
                    placeholder="Name"
                    textColor="#AAA"
                    text={data.username}
                    setText={setData}
                    formkey="username"
                  />
                </View>
                <View style={{ marginTop: 10 }} />
                <Text style={styles.text}>Enter Your Email</Text>
                <View style={{ marginTop: 10 }} />
                <Inputs
                  placeholder="Email"
                  textColor="#AAA"
                  Enter
                  your
                  subject
                />
                <View style={{ marginTop: 10 }} />
                <Text style={styles.text}>Enter your subject</Text>
                <View style={{ marginTop: 10 }} />
                <Inputs
                  placeholder="Subject"
                  textColor="#AAA"
                  text={data.username}
                  setText={setData}
                  formkey="username"
                />
                <View style={{ marginTop: 10 }} />
                <Text style={styles.text}>Enter your message</Text>
                <View style={{ marginTop: 10 }} />
                <View style={[styles.textInput, { height: 150, marginTop: 15 }]}>
                  <TextInput
                    placeholder="Enter something..."
                    placeholderTextColor={Colors.Tertiary}
                    style={{ paddingHorizontal: 15 }}
                  />
                </View>
                <View style={{ alignSelf: 'center', marginTop: 25 }}>
                  <ButtonComponent
                    btnfonSize={16}
                    borderRadius={50}
                    buttonText="Submit"
                    buttonColor={Colors.Primary}
                    textColor={Colors.textColor.Primary}
                    // onPress={() =>
                    //   navigation.replace('MyDrawer', {
                    //     screen: 'HomeScreen',
                    //   })
                    // }
                    // onPress={getApiData}
                    height={WIDTH <= 375 ? 49 : 55}
                    width={WIDTH <= 375 ? 125 : 214}
                  />
                </View>
                <View style={styles.detaialbox}>
                  <View style={[styles.boxRow]}>
                    <View style={{ marginTop: 5 }}>
                      <Phone />
                    </View>
                    <View>
                      <Text style={styles.text2}>Contact Number</Text>
                      <Text style={[styles.text2, { fontSize: 14, fontFamily: 'Poppins-Regular' }]}>
                        (123) 456-7890
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.boxRow]}>
                    <View style={{ marginTop: 5 }}>
                      <Email />
                    </View>
                    <View>
                      <Text style={styles.text2}>Email</Text>
                      <Text style={[styles.text2, { fontSize: 14, fontFamily: 'Poppins-Regular' }]}>
                        info@kokoranch.com
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.boxRow]}>
                    <View style={{ marginTop: 5 }}>
                      <Location />
                    </View>
                    <View>
                      <Text style={styles.text2}>Email</Text>
                      <Text style={[styles.text2, { fontSize: 14, fontFamily: 'Poppins-Regular' }]}>
                        info@kokoranch.com
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginVertical: 15 }}>
                  <Text
                    style={[styles.text, { textAlign: 'center', fontSize: 16 }]}>
                    Follow Us
                  </Text>
                </View>
                <View style={styles.bottom}>
                  <Facebook />
                  <Twitter />
                  <LinkedIn />
                  <Instagram />
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ContactUS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headtextView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  headtext: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.textColor.Primary,
  },

  box: {
    // paddingTop: 15,
    // backgroundColor: Colors.blackBg,
    opacity: 0.7,
    // width: WIDTH,

    // alignItems: 'center',
    marginTop: 15,
    borderRadius: 5,
  },
  touchable: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    letterSpacing: 0.7,
    Colors: Colors.textColor.TextColor1,
    fontFamily: 'Poppins-Regular'
  },
  text: {
    fontSize: 14,
    color: Colors.textColor.Primary,
    marginTop: 15,
    fontFamily: 'Poppins-Regular'
  },
  text2: {
    fontSize: 16,
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 25,
  },
  detaialbox: {

    width: '100%',
    marginTop: 15,
    backgroundColor: Colors.Secondary,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontFamily: 'Poppins-Regular'
  },
  boxRow: {
    padding: 10,
    paddingTop: 15,
    // backgroundColor: Colors.Tertiary,
    flexDirection: 'row',
  },
  bottom: {
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.Tertiary,
    borderRadius: 5,
  },
});
