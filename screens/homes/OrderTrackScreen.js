import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import Assets from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import HeaderComponent from '../../components/HeaderComponent';
import Icon from 'react-native-vector-icons/Feather';
import ButtonComponent from '../../components/ButtonComponent';
import {WIDTH} from '../../assets/constatnts/Dimentions';

const OrderTrackScreen = props => {
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
              headtext2="Thank You"
            />
          </View>
          <View style={styles.headtextView}>
            <View style={styles.content}>
              <View style={styles.maiview}>
                <Image
                  source={Assets.services.shoppinhBucket}
                  resizeMode="contain"
                  style={{width: 100, height: 100}}
                />
              </View>
              <View style={styles.maiview}>
                <Text style={[styles.text, {fontSize: 18}]}>
                  Complete Successfully
                </Text>
                <Text
                  style={[
                    styles.text,
                    {color: Colors.Tertiary, padding: 5, paddingHorizontal: 35},
                  ]}>
                  Your ordering information will be forwarded to your email
                </Text>
                <Text style={[styles.text, {color: '#1492E6', padding: 5}]}>
                  Jondoe@gmail.com
                </Text>
                <View></View>
              </View>
            </View>
            <View style={{padding: 15}}>
              <ButtonComponent
                btnfonSize={16}
                borderRadius={50}
                buttonText="Continue Shopping"
                buttonColor={Colors.Primary}
                textColor={Colors.textColor.Primary}
                onPress={() =>
                  props.navigation.replace('MyDrawer', {
                    screen: 'HomeScreen',
                  })
                }
                // onPress={getApiData}
                height={WIDTH <= 375 ? 53 : 53}
                width={WIDTH <= 375 ? 195 : 205}
              />
            </View>
            <Text style={styles.text}>What Happen Next?</Text>
            <View
              style={{
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={[styles.imgview]}>
                <Image
                  source={Assets.cards.Compound1}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text style={[styles.text, styles.gretext]}>
                  We will inform you when the package is ready
                </Text>
              </View>
              <View style={[styles.imgview]}>
                <Image
                  source={Assets.cards.Compound2}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text style={[styles.text, styles.gretext]}>
                  We will inform you when the package is ready
                </Text>
              </View>
              <View style={[styles.imgview]}>
                <Image
                  source={Assets.cards.compound3}
                  resizeMode="contain"
                  style={styles.img}
                />
                <Text style={[styles.text, styles.gretext]}>
                  We will inform you when the package is ready
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OrderTrackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
  },
  headtextView: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 15,
  },
  headtext: {
    justifyContent: 'center',
    fontSize: 20,
    color: Colors.textColor.Primary,
  },
  maiview: {
    // marginTop: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // marginTop: 15,
  },
  content: {
    marginTop: 5,
    // width: '80%',
    alignSelf: 'center',
  },
  text: {
    color: Colors.textColor.Primary,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  gretext: {
    color: Colors.textColor.Tertiary,
    paddingTop: 5,
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
  },
  img: {width: 80, height: 60},
  imgview: {width: '45%', alignItems: 'center', padding: 2},
});
