import {
  ImageBackground,
  Text,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import ProductCard from '../../components/ProductCard';
import ProductCardSm from '../../components/ProductCardSm';
import Assets from '../../assets';
import {FlatList} from 'react-native-gesture-handler';
import ProductCompo from '../../components/ProductCompo';
import Searchbar from '../../components/Searchbar';
import ContentCompo from '../../components/ContentCompo';
import ProductList from '../../components/PrductList';
import CoverImgCard from '../../components/CoverImgCard';
import CircleCard from '../../components/CircleCard/CirleCard';
import ProductCardlg from '../../components/ProductCardLG';
import ImageCard from '../../components/imageCard';
import {HEIGHT, WIDTH} from '../../assets/constatnts/Dimentions';
import HeaderComponent from '../../components/HeaderComponent';
import DumeyData from '../../components/DumeyData';

const HomeScreen = ({navigation}) => {
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
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image1}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 5}}>
          <View style={styles.header}>
            <HeaderComponent fab onPress={() => navigation.openDrawer()} />
            <View style={{width: '74%'}}>
              <Searchbar placeholder={'Search anything you need..'} />
            </View>
          </View>
          <ProductCardlg CardImageBGMain={Assets.BackgrounImages.productcard} />
          <View style={{paddingHorizontal: 25, marginTop: 25}}>
            <ProductCardSm
              OnpresCard={() => {
                // navigation.navigate('AssismentScreen');
              }}
              text1={'Featured '}
              text2={' Products '}
              text3={'See All'}
              onPress={() => navigation.navigate('PlantsScreen')}
              img={Assets.BackgrounImages.bg1}
            />
          </View>
          <View style={{marginTop: 15, paddingHorizontal: 15}}>
            <ProductList
              onpress1={() => {
                navigation.navigate('ProductDescription', {
                  imagitem: Assets.products.product4,
                });
              }}
              prductbox2
              index
              image1={Assets.products.product3}
              text1={'Pla'}
              text2={'nts'}
              text3={'See All'}
              Text2
            />
          </View>
          <ContentCompo />
          <View style={{flex: 1, paddingHorizontal: 15}}>
            <ProductCard
              OnpresCard={() => {
                navigation.navigate('AssismentScreen');
              }}
              text1={'All Pro'}
              text2={'ducts'}
              text3={'See All'}
              img={Assets.BackgrounImages.bg1}
              text="Top Categories"
              Text2
            />
            <View
              style={{
                marginTop: 35,
                height: WIDTH / 1.3,
                alignItems: 'center',
              }}>
              <CircleCard />
            </View>
            <View style={{}}>
              <ProductList
                onpress1={() => {
                  navigation.navigate('ProductDescription', {
                    imagitem: Assets.products.oilbotel1,
                  });
                }}
                prductbox2
                image1={Assets.products.oilbotel1}
                text1={'Pla'}
                text2={'nts'}
                text3={'See All'}
                Text2
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 15,
            }}>
            <ProductCardSm
              OnpresCard={() => {
                navigation.navigate('AssismentScreen');
              }}
              text1={'Serv'}
              text2={'ices'}
              text3={''}
              img={Assets.BackgrounImages.bg1}
            />
            <View style={{marginTop: 15}} />
            <ImageCard index />
          </View>
          <View>
            <CoverImgCard
              fontSize={20}
              index
              textName={'Trade Products Or Plants'}
              textDisc={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ld diam nonumy eirmod tempor invidunt ut ld diam nonumy eirmod tempor invidunt ut l'
              }
              coverimage={Assets.BackgrounImages.cover1}
            />
            <View style={{height: WIDTH / 3.9}}>
              <View
                style={{
                  position: 'absolute',
                  // bottom: 0,
                  right: 0,
                  left: 0,
                  top: -100,
                  bottom: 1,
                  marginVertical: 10,
                  paddingBottom: 10,
                }}>
                <FlatList
                  data={DumeyData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => {
                    <View style={{marginVertical: 10, paddingBottom: 10}} />;
                    return (
                      <>
                        <View style={{}}>
                          <View style={{width: '90%', alignSelf: 'center'}}>
                            <ProductCompo
                              onPress={() => navigation.navigate('TradeScreen')}
                              image={Assets.products.productItem}
                              name={item.name}
                              description={item.description}
                              backgroundColor={'#1A1A1A'}
                              height={148}
                              borderRadius={23}
                            />
                          </View>
                        </View>
                      </>
                    );
                  }}
                />
              </View>
            </View>
            <View style={{paddingHorizontal: 25}}>
              <ProductCardSm
                OnpresCard={() => {
                  navigation.navigate('AssismentScreen');
                }}
                text1={'Delivery '}
                text2={'Services'}
                text3={''}
                img={Assets.BackgrounImages.bg1}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              height: HEIGHT / 2.1,
            }}>
            <ImageCard />
          </View>
          <CoverImgCard
            index
            borderRadius={20}
            marginTop={25}
            backgroundColor={Colors.Secondary}
            opacity={0.75}
            paddingTop={40}
            textAlign={'center'}
            fontSize={26}
            textName={'Arts & Clothing'}
            textDisc={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
            }
            coverimage={Assets.BackgrounImages.cover2}
          />
          <View style={{marginTop: 25, paddingHorizontal: 15}}>
            <ProductList
              onpress1={() => {
                navigation.navigate('ProductDescription', {
                  imagitem: Assets.products.Tshirt,
                });
              }}
              image1={Assets.products.Tshirt}
              text1={'T-'}
              text2={'Shirt'}
              text3={'See All'}
            />
            <ProductList
              onpress1={() => {
                navigation.navigate('ProductDescription', {
                  imagitem: Assets.products.product4,
                });
              }}
              image1={Assets.products.product4}
              text1={'Plant '}
              text2={'Inspired Jewelry'}
              text3={'See All'}
            />
            <ProductList
              onpress1={() => {
                navigation.navigate('ProductDescription', {
                  imagitem: Assets.products.Leaf,
                });
              }}
              image1={Assets.products.Leaf}
              text1={'Plant '}
              text2={'Inspired Art'}
              text3={'See All'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingBottom: 55,
            }}>
            <CoverImgCard
              paddingTop={30}
              coverimage={Assets.BackgrounImages.cover3}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image1: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: 25,
  },
  text: {
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
    fontFamily: 'Poppins-Regular',
  },
});
