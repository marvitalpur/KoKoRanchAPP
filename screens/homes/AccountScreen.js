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
import Icon from 'react-native-vector-icons/Feather';
import ButtonComponent from '../../components/ButtonComponent';
import Inputs from '../../components/Inputs';
import {HEIGHT, WIDTH} from '../../assets/constatnts/Dimentions';
import {Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Popup from '../../components/Popup';

const AccountScreen = ({navigation}) => {
  const [isopen, setIsOpen] = useState(false);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Assets.BackgrounImages.bg1}
          resizeMode="cover"
          style={styles.image}>
          <View style={{}}>
            <View style={styles.box}>
              <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                enableOnAndroid={true}
                enableAutomaticScroll={true}
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}>
                <View style={{alignSelf: 'center', marginVertical: 25}}>
                  <View style={{marginTop: 25}}>
                    <Text style={styles.headtext}>My Account</Text>
                  </View>
                  <Avatar.Image
                    size={90}
                    style={{alignSelf: 'center'}}
                    source={Assets.Logos.avatarPlaceholder}
                  />
                  <LinearGradient
                    colors={[Colors.Secondary2, Colors.Tertiary2]}
                    style={styles.Cameraicon}>
                    <Icon name="camera" color={'#fff'} />
                  </LinearGradient>
                </View>
                <View style={{marginTop: 5, paddingHorizontal: 25}}>
                  <View style={{marginTop: 5}} />
                  <Text style={styles.inputstext}>First Name</Text>
                  <Inputs
                    fontSize={12}
                    placeholder="First Name"
                    text={username}
                    setText={setUserName}
                    ImgIcon={Assets.ICons.pencile}
                    width={18}
                    height={18}
                  />
                  <Text style={styles.inputstext}>Last Name</Text>
                  <View style={{marginTop: 10}} />
                  <Inputs
                    fontSize={12}
                    placeholder="Last Name"
                    text={username}
                    setText={setUserName}
                    ImgIcon={Assets.ICons.pencile}
                    width={18}
                    height={18}
                  />
                  <Text style={styles.inputstext}>Email</Text>
                  <View style={{marginTop: 10}} />
                  <Inputs
                    fontSize={12}
                    placeholder="JONEDOE@gmail.com"
                    text={email}
                    setText={setEmail}
                  />
                  <Text style={styles.inputstext}>Phone Number</Text>
                  <View style={{marginTop: 10}} />
                  <Inputs
                    fontSize={12}
                    placeholder="+1243224323432"
                    text={email}
                    setText={setEmail}
                    ImgIcon={Assets.ICons.pencile}
                    width={18}
                    height={18}
                  />
                  <View
                    style={{
                      alignSelf: 'center',
                    }}>
                    <View style={{marginTop: WIDTH <= 375 ? 15 : 25}}>
                      <ButtonComponent
                        btnfonSize={16}
                        borderRadius={50}
                        buttonText="Update"
                        buttonColor={Colors.Primary}
                        textColor={Colors.textColor.Primary}
                        onPress={() => {
                          setIsOpen(!isopen);
                        }}
                        height={WIDTH <= 375 ? 50 : 55}
                        width={WIDTH <= 375 ? 185 : 245}
                      />
                    </View>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </View>
            <Popup
              modal2
              padding1={45}
              btntext="Continue"
              paragraph={'Your Account is Updated'}
              modalVisible={isopen}
              onPress={() => {
                setIsOpen(!isopen);
              }}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default AccountScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
  },
  plusicon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '',
  },
  box: {
    opacity: 0.7,
    // width: WIDTH,
    height: '100%',
    borderRadius: 5,
    paddingBottom: 12,
    marginBottom: 25,
  },
  touchable: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '200',
    letterSpacing: 0.7,
    Colors: Colors.textColor.TextColor1,
  },
  headtext: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Bold',
  },
  inputstext: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.textColor.Primary,
    // marginVertical: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins - Regular',
  },
  Cameraicon: {
    width: 36,
    height: 36,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
