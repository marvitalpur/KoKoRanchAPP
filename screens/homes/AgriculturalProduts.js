import {StyleSheet, FlatList, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Assets from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import ProductCard from '../../components/ProductCard';
import HeaderComponent from '../../components/HeaderComponent';
import {WIDTH} from '../../assets/constatnts/Dimentions';

const AgriculturalProduts = props => {
  const data = [
    {
      image1: Assets.Agricultural.Agricultural1,
      name: 'Landscaping',
      disc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      onPress: () => {
        props.navigation.navigate('LandscapingScreen');
      },
    },
    {
      image1: Assets.Agricultural.Agricultural3,
      name: 'Lawn Mowing',
      disc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      onPress: () => {
        props.navigation.navigate('LandscapingScreen');
      },
    },
    {
      image1: Assets.Agricultural.Agricultural2,
      name: 'Landscaping',
      disc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      onPress: () => {
        props.navigation.navigate('LandscapingScreen');
      },
    },
    {
      image1: Assets.Agricultural.Agricultural4,
      name: 'Hay Sales',
      disc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      onPress: () => {
        props.navigation.navigate('LandscapingScreen');
      },
    },
    {
      image1: Assets.Agricultural.Agricultural5,
      name: 'Tree Services',
      disc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      onPress: () => {
        props.navigation.navigate('LandscapingScreen');
      },
    },
    {
      image1: Assets.Agricultural.Agricultural6,
      name: 'Cattle Hay',
      disc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      onPress: () => {
        props.navigation.navigate('LandscapingScreen');
      },
    },
    {
      image1: Assets.Agricultural.Agricultural7,
      name: 'Tractor Repair',
      disc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      onPress: () => {
        props.navigation.navigate('LandscapingScreen');
      },
    },
    {
      image1: Assets.Agricultural.Agricultural8,
      name: 'small Engin',
      disc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      onPress: () => {
        props.navigation.navigate('LandsScapingScreen');
      },
    },
    {
      image1: Assets.Agricultural.Agricultural9,
      name: 'Pest Management',
      disc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
      onPress: () => {
        props.navigation.navigate('LandsScapingScreen');
      },
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <View style={{marginTop: 15}}>
          <HeaderComponent
            onPress={() => props.navigation.navigate('Home')}
            headtext2="Agricultural Services"
          />
        </View>
        <View style={styles.content}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            contentContainerStyle={{alignSelf: 'center'}}
            renderItem={({item, index}) => {
              return (
                <>
                  <View style={{padding: 15}}>
                    <ProductCard
                      onPress={item.onPress}
                      fontWeight={'500'}
                      color={Colors.textColor.Primary}
                      fontSize={12}
                      card1
                      name={item.name}
                      image={item.image1}
                      description={item.disc}
                      backgroundColor={Colors.Secondary}
                      products={true}
                      // image={Assets.products.product2}
                      height={WIDTH <= 375 ? 220 : 220}
                      width={WIDTH <= 375 ? 154 : 154}
                      borderRadius={20}
                    />
                  </View>
                </>
              );
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
  },
  content: {flex: 1, marginTop: 15},
  headtextView: {},
  headtext: {
    fontSize: 20,
    color: Colors.textColor.Primary,
  },
});
export default AgriculturalProduts;
