import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Assets from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import HeaderComponent from '../../components/HeaderComponent';
import {CustomRating} from '../../components/MyRating';
import {FAB} from 'react-native-paper';
import {WIDTH} from '../../assets/constatnts/Dimentions';
import ButtonComponent from '../../components/ButtonComponent';
import Popup from '../../components/Popup';

const ProductDescription = ({route, navigation}) => {
  const {imagitem} = route.params;
  const [count, setCount] = useState(2);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const [items, setItems] = useState([
    {
      id: 1,
      // image: Assets.cards.cardImage1,
      description: 'Home Equipment Push Up Bars',
      count: 2,
      checked: false,
    },
    {
      id: 2,
      // image: Assets.cards.cardImage2,
      description: 'Fitness Tracker Watch',
      count: 1,
      checked: true,
    },
  ]);
  const increment = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, count: item.count + 1} : item,
      ),
    );
  };
  const decrement = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, count: item.count - 1} : item,
      ),
    );
  };
  const handleRatingSelect = ratingValue => {
    setRating(ratingValue);
  };
  // console.log(image);
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
              <HeaderComponent
                onPress={() => navigation.goBack()}
                headtext2="Product Details"
                rightIcon={true}
              />
            </View>
            <View style={styles.headtextView}>
              <View style={{height: 220, width: 220}}>
                <Image
                  source={imagitem}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <View style={styles.content}>
                <View style={[styles.mainview, {borderBottomWidth: 1}]}>
                  <Text style={[styles.text, {fontSize: 20}]}>
                    Product Name
                  </Text>
                  <View style={{marginTop: 5, flexDirection: 'row'}}>
                    <CustomRating
                      maxRating={7}
                      onRatingSelected={handleRatingSelect}
                    />
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 10,
                        color: Colors.Tertiary,
                      }}>
                      (45)
                    </Text>
                  </View>
                </View>
                <View style={[styles.mainview, {borderBottomWidth: 1}]}>
                  <Text
                    style={[
                      styles.text,
                      {fontSize: 14, fontFamily: 'Poppins-Medium'},
                    ]}>
                    USD: $15.00
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <View
                        style={[
                          styles.headerContainer,
                          {
                            flexDirection: 'row',
                            // paddingBottom: 12,
                          },
                        ]}>
                        <FAB
                          style={[styles.fab, styles.babstyle2]}
                          size="small"
                          icon="minus"
                          color="white"
                          onPress={decrement}
                        />
                        <View
                          style={{
                            borderWidth: 2,
                            borderColor: '#fff',
                            marginHorizontal: 5,
                            paddingHorizontal: 12,
                            borderRadius: 5,
                          }}>
                          <Text style={{color: '#fff'}}>{count}</Text>
                        </View>
                        <FAB
                          style={[styles.fab, styles.babstyle2]}
                          size="small"
                          icon="plus"
                          color="white"
                          onPress={increment}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{}}>
                  <Text style={[styles.text, {fontSize: 20}]}>Description</Text>
                  <Text style={[styles.text, {fontSize: 10, lineHeight: 11}]}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 15,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={[
                        styles.text,
                        {
                          fontFamily: 'Poppins-Medium',
                          fontSize: 16,
                          color: Colors.textColor.Primary,
                        },
                      ]}>
                      Seller
                    </Text>
                    <Text
                      onPress={() => setModalVisible1(!modalVisible)}
                      style={styles.Gtext}>
                      Comments
                    </Text>
                  </View>
                  <Text
                    style={[styles.text, {color: Colors.textColor.Primary}]}>
                    Mark Henry
                  </Text>
                  <Text
                    onPress={() => setModalVisible2(!modalVisible2)}
                    style={styles.Gtext}>
                    Contact vendor
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('VendorDetails', {
                        AllFilter: true,
                        trader: false,
                        seller: true,
                        headtext: 'Vendor Details',
                        Name: 'Paul Smith',
                        selllerId: 'Seller021',
                        btntex: 'Contact Seller',
                        DicText: 'Products Of Paul Smith',
                      })
                    }>
                    <Text style={styles.Gtext}>
                      View all items of the vendor
                    </Text>
                  </TouchableOpacity>

                  <Text
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.Gtext}>
                    Shipping Details:
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 25,
                    alignSelf: 'center',
                    paddingBottom: 15,
                  }}>
                  <ButtonComponent
                    btnfonSize={16}
                    borderRadius={50}
                    buttonText="Proceed to Pay"
                    buttonColor={Colors.Primary}
                    textColor={Colors.textColor.Primary}
                    onPress={() =>
                      navigation.navigate('MyTabs', {
                        screen: 'Cart',
                      })
                    }
                    // onPress={getApiData}
                    height={WIDTH <= 375 ? 53 : 53}
                    width={WIDTH <= 375 ? 195 : 195}
                  />
                </View>
              </View>
            </View>
            <>
              <Popup
                modal5
                headtext={'Shipping Details'}
                modalVisible={modalVisible}
                iconPress={() => setModalVisible(false)}
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
                modal3
                paragraph="Clear All Filter"
                btntext="Submit"
                iconPress={() => setModalVisible1(false)}
                onPress={() => setModalVisible1(false)}
                modalVisible={modalVisible1}
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
            </>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default ProductDescription;

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

  mainview: {
    paddingTop: 8,
    width: '100%',
    height: 43,
    borderColor: Colors.Tertiary,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 10,
    // marginTop: 15,
  },
  content: {
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    color: Colors.Tertiary,
    paddingTop: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
  },
  Gtext: {
    color: Colors.Primary,
    textDecorationLine: 'underline',
    paddingTop: 10,
  },
  fab: {
    height: 48,
    width: 51,
    borderRadius: 5,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  babstyle2: {
    height: WIDTH < 375 ? 27 : 27,
    width: WIDTH < 375 ? 22 : 22,
    color: '#FFFF',
  },
});
