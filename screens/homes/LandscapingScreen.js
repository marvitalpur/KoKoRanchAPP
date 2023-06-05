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
import Assets from '../../assets';
import {FlatList} from 'react-native-gesture-handler';
import HeaderComponent from '../../components/HeaderComponent';
import FilterComponent from '../../components/FilterComponent';
import Popup from '../../components/Popup';
import ProductCompo from '../../components/ProductCompo';

const LandscapingScreen = ({route, navigation}) => {
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
    {image1: Assets.cards.path1},
    {image1: Assets.cards.path2},
    {image1: Assets.cards.path3},
    {image1: Assets.cards.path4},
    {image1: Assets.cards.path5},
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
                headtext2={'Agricultural Services'}
              />
            </View>
            <View style={{marginTop: 15}}>
              <Text style={styles.headtext}>Landscaping</Text>
              <View style={{}}>
                {/* <Popup /> */}
                <FilterComponent
                  AllFilter={true}
                  onPress1={() => setModalVisible(!modalVisible)}
                  onPress2
                  headtext={'Sort By'}
                  text1={'Popularity'}
                  text2={'Price High to Low'}
                  text3={'Price Low to High'}
                  text4={'Newest First'}
                  text5={'Oldest First'}
                />
              </View>
              <View style={{}}>
                <FlatList
                  data={data}
                  renderItem={({item, index}) => {
                    return (
                      <>
                        <View
                          style={{
                            width: '100%',
                            marginVertical: 10,
                            paddingHorizontal: 15,
                            alignSelf: 'center',
                          }}>
                          <ProductCompo
                            cardCompo1
                            onPress={() => navigation.navigate('TradeScreen')}
                            image={item.image1}
                            name={'Service Name'}
                            text1={'Service Name'}
                            text2={'$199.99'}
                            rating={true}
                            Ratings1
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
export default LandscapingScreen;
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
  headtext: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.textColor.Primary,
    fontFamily: 'Popins-Medium',
  },
});
