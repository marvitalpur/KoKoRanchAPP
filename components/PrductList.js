import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import ProductCardSm from './ProductCardSm';
import Assets from '../assets';
import Colors from '../assets/constatnts/Colors';
import {WIDTH} from '../assets/constatnts/Dimentions';

const ProductList = ({
  index,
  image1,
  Title,
  text1,
  text2,
  text3,
  onPress,
  onpress1,
  onpress2,
  onpress3,
  onpress4,
}) => {
  const data = [
    {
      image1: image1,
      Title: Title,
      Onpress: onpress1,
    },
    {image1: image1, Title: Title, Onpress: onpress1},
    {image1: image1, Title: Title, Onpress: onpress1},
    {image1: image1, Title: Title, Onpress: onpress1},
  ];
  return (
    <>
      <View style={{}}>
        {index ? (
          <View style={{flex: 1}}>
            <FlatList
              data={data}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <>
                    <View
                      style={{
                        padding: WIDTH < 375 ? 5 : 15,
                        paddingTop: 10,
                        // backgroundColor: 'green',
                      }}>
                      <ProductCard
                        onPress={item.Onpress}
                        card1
                        Ratingsline
                        image={item.image1}
                        text1={'$14.80'}
                        text2={'$17.80'}
                        backgroundColor={Colors.basebg}
                        description="Koko Ranch Cannabis Product Name Here"
                        products={true}
                        // image={Assets.products.product2}
                        height={WIDTH <= 375 ? 220 : 220}
                        width={WIDTH <= 375 ? 154 : 154}
                        borderRadius={20}
                        color="#f2f"
                        fontWeight="bold"
                      />
                    </View>
                  </>
                );
              }}
            />
          </View>
        ) : (
          <View style={{}}>
            <ProductCardSm
              OnpresCard={() => {
                navigation.navigate('AssismentScreen');
              }}
              text1={text1}
              text2={text2}
              text3={text3}
              img={Assets.BackgrounImages.bg1}
              text="Fitness Assesment"
            />
            <View style={{marginTop: 25}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View
                        style={{padding: WIDTH < 375 ? 5 : 15, paddingTop: 20}}>
                        <ProductCard
                          card1
                          Ratingsline
                          onPress={item.Onpress}
                          image={image1}
                          text1={'$14.80'}
                          text2={'$17.80'}
                          backgroundColor={Colors.basebg}
                          description="Koko Ranch Cannabis Product Name Here"
                          products={true}
                          // image={Assets.products.product2}
                          height={WIDTH <= 375 ? 220 : 220}
                          width={WIDTH <= 375 ? 154 : 154}
                          borderRadius={23}
                          fontWeight="bold"
                        />
                      </View>
                    </>
                  );
                }}
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
