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
import Popup from '../../components/Popup';
import {WIDTH} from '../../assets/constatnts/Dimentions';

const PlantsScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Data, setData] = useState([]);
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
    {image1: Assets.products.product3},
    {image1: Assets.products.product3},
    {image1: Assets.products.product3},
    {image1: Assets.products.product3},
    {image1: Assets.products.product3},
    {image1: Assets.products.product3},
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
            <View style={{}}>
              <View style={{marginTop: 25}}>
                <HeaderComponent onPress={() => props.navigation.goBack()} />
              </View>
              <View style={[styles.textView]}>
                <View style={[styles.textView, {}]}>
                  <Text style={styles.text}>Featured Products</Text>
                </View>
              </View>
            </View>
            <View style={{}}>
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
              <FlatList
                data={data}
                numColumns={2}
                contentContainerStyle={{marginHorizontal: 15}}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View
                        style={{padding: WIDTH < 375 ? 5 : 15, paddingTop: 20}}>
                        <ProductCard
                          card1
                          Ratingsline
                          image={item.image1}
                          text1={'$14.80'}
                          text2={'$17.80'}
                          backgroundColor={Colors.basebg}
                          description="Koko Ranch Cannabis Product Name Here"
                          products={true}
                          width={160}
                          height={220}
                          borderRadius={20}
                          fontWeight="bold"
                        />
                      </View>
                      <Popup
                        modal4
                        paragraph="Clear All Filter"
                        btntext="Clear All Filter"
                        onPress={() => setModalVisible(false)}
                        modalVisible={modalVisible}
                      />
                    </>
                  );
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
export default PlantsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {flex: 1},
  textView: {
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: Colors.textColor.Primary,
    letterSpacing: 0.9,
    lineHeight: 30,
    marginVertical: 5,
    borderBottomWidth: 2,
    alignSelf: 'center',
    borderColor: Colors.Primary,
  },
});
