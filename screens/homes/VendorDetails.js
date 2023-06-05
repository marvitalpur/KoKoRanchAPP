import {
  Image,
  ImageBackground,
  ImageBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import ProductCard from '../../components/ProductCard';
import Assets from '../../assets';
import {FlatList} from 'react-native-gesture-handler';
import HeaderComponent from '../../components/HeaderComponent';
import FilterComponent from '../../components/FilterComponent';
import VenderInformation from '../../components/VenderInformation';
import Popup from '../../components/Popup';
import {WIDTH} from '../../assets/constatnts/Dimentions';
import ProductCompo from '../../components/ProductCompo';

const VendorDetails = ({route, navigation}) => {
  const {
    seller,
    trader,
    headtext,
    btntex,
    DicText,
    Name,
    selllerId,

    AllFilter,
  } = route.params;
  const [Data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);
  const data = [
    {image1: Assets.products.oilbotel1},
    {image1: Assets.products.oilbotel1},
    {image1: Assets.products.oilbotel1},
    {image1: Assets.products.oilbotel1},
  ];
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
            <View style={{marginTop: 15}}>
              <HeaderComponent
                onPress={() => navigation.goBack()}
                headtext2={headtext}
              />
            </View>
            <View style={{marginTop: 15}}>
              <View styles={{paddingHorizontal: 5}}>
                <VenderInformation
                  btntext={btntex}
                  name={Name}
                  selllerid={selllerId}
                  addtext={'Add to favorites'}
                  DiscText={
                    'Excellent Service, High-End Products, Fastest Logistics. You will get a positive feedback after your payment in 1 day ：）'
                  }
                  btnpress={() => setModalVisible2(!modalVisible3)}
                />
              </View>
              <View style={{paddingHorizontal: 25, marginTop: 25}}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 16,
                      lineHeight: 18,
                      color: Colors.textColor.Primary,
                    },
                  ]}>
                  {DicText}
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 14,
                      paddingTop: 10,
                      color: Colors.textColor.Tertiary,
                      fontFamily: 'Popins-Regular',
                    },
                  ]}>
                  3,618 items found in All Products By Paul Smith
                </Text>
              </View>
              <View style={{}}>
                {/* <Popup /> */}
                <FilterComponent
                  AllFilter={AllFilter}
                  onPress1={() => setModalVisible(!modalVisible)}
                  onPress2
                  headtext={'Filter'}
                  text1={'Popularity'}
                  text2={'Price High to Low'}
                  text3={'Price Low to High'}
                  text4={'Newest First'}
                  text5={'Oldest First'}
                />
              </View>
              <View style={{paddingHorizontal: 10}}>
                {seller && (
                  <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({item, index}) => {
                      return (
                        <>
                          <View
                            style={{
                              padding: WIDTH <= 375 ? 5 : 15,
                              paddingTop: 20,
                            }}>
                            <ProductCard
                              card1
                              Ratingsline
                              image={item.image1}
                              text1={'$14.80'}
                              text2={'$17.80'}
                              backgroundColor={Colors.basebg}
                              description="Koko Ranch Cannabis Product Name Here"
                              products={true}
                              // image={Assets.products.product2}
                              width={160}
                              height={220}
                              borderRadius={20}
                              color="#f2f"
                              fontWeight="bold"
                            />
                          </View>
                        </>
                      );
                    }}
                  />
                )}
                {trader && (
                  <FlatList
                    data={data}
                    renderItem={({item, index}) => {
                      return (
                        <>
                          <View style={{width: '100%', alignSelf: 'center'}}>
                            <ProductCompo
                              onPress={() => navigation.navigate('TradeScreen')}
                              image={Assets.products.productItem}
                              name={item.name}
                              description={item.description}
                              backgroundColor={'#1A1A1A'}
                              height={148}
                              borderRadius={23}
                              color="#f2f"
                              fontWeight="bold"
                            />
                          </View>
                        </>
                      );
                    }}
                  />
                )}
              </View>
            </View>
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
            <Popup
              modal4
              paragraph="Clear All Filter"
              btntext="Clear All Filter"
              onPress={() => setModalVisible(!modalVisible)}
              modalVisible={modalVisible}
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
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
export default VendorDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {flex: 1},
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
    lineHeight: 21,
  },
});
