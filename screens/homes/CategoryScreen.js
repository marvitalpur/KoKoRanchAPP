import {
  Image,
  ImageBackground,
  ImageBase,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import Assets from '../../assets';
import Icon from 'react-native-vector-icons/Feather';

const CategoryScreen = ({navigation}) => {
  const [bgColor, SetBgColor] = useState(0);
  const [Data, setData] = useState(false);
  const [isColor, setIsColor] = useState();
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);
  const handlepress = index => {
    setIsColor(index);
  };
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
          <View style={{paddingBottom: 25}}>
            <View style={{padding: 25}}>
              <Text style={styles.headtext}>Categories</Text>
              <Text
                style={[
                  styles.text,
                  styles.text2,
                  {fontSize: 18, paddingTop: 25},
                ]}>
                All
              </Text>
              <View style={styles.main}>
                <View style={[styles.borderedText, {width: 70}]}>
                  <Text style={[styles.text, styles.greentext]}>Plant</Text>
                </View>
                <View
                  style={[styles.borderedText, {width: 70, marginTop: 4}]}
                />
                <Text style={[styles.text2]}>Cactus/Succulents</Text>
                <Text style={[styles.text2]}>Foliage Plants</Text>
                <Text style={[styles.text2]}>Foliage Plants</Text>
                <View style={[styles.borderedText, {width: 140}]}>
                  <Text style={[styles.text, styles.greentext]}>
                    Plant Nutrients
                  </Text>
                </View>
                <View
                  style={[styles.borderedText, {width: 140, marginTop: 4}]}
                />
                <Text style={[styles.text2]}>Fertilizer</Text>
                <Text style={[styles.text2]}>Supplement</Text>
                <View style={[styles.borderedText, {width: 130}]}>
                  <Text style={[styles.text, styles.greentext]}>
                    Plant Media
                  </Text>
                </View>
                <View
                  style={[styles.borderedText, {width: 130, marginTop: 4}]}
                />
                <Text style={[styles.text2]}>Soil/Media</Text>
                <Text style={[styles.text2]}>Semi-Hydro</Text>
                <Text style={[styles.text2]}>Hydrophonic</Text>
                <View style={[styles.borderedText, {width: 160}]}>
                  <Text style={[styles.text, styles.greentext]}>
                    Plant Containers
                  </Text>
                </View>
                <View
                  style={[styles.borderedText, {width: 160, marginTop: 4}]}
                />
                <Text style={[styles.text2]}>Round Pots</Text>
                <Text style={[styles.text2]}>Square Pots</Text>
                <Text style={[styles.text2]}>Decorative Pots</Text>
                <View style={[styles.borderedText, {width: 120}]}>
                  <Text style={[styles.text, styles.greentext]}>
                    Plant Support
                  </Text>
                </View>
                <View
                  style={[styles.borderedText, {width: 120, marginTop: 4}]}
                />
                <Text style={[styles.text2]}>Floral Tubes</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.text2]}>Floral Design Supplies</Text>
                  <TouchableOpacity onPress={() => setData(!Data)} style={{}}>
                    <Icon
                      fontSize={16}
                      name={Data ? 'chevron-down' : 'chevron-up'}
                      style={{
                        color: Colors.textColor.Primary,
                        marginTop: 16,
                        paddingLeft: 8,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                {Data ? (
                  <View>
                    <Text
                      style={[
                        styles.text,
                        styles.text2,
                        {color: Colors.Primary},
                      ]}>
                      Butterfly Clasp
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        styles.text2,
                        {color: Colors.Primary},
                      ]}>
                      Butterfly Clasp
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        styles.text2,
                        {color: Colors.Primary},
                      ]}>
                      Orchid Clasps
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        styles.text2,
                        {color: Colors.Primary},
                      ]}>
                      Tape
                    </Text>
                  </View>
                ) : null}
                <View style={[styles.borderedText, {width: 120}]}>
                  <Text style={[styles.text, styles.greentext]}>
                    Floral Supplies
                  </Text>
                </View>
                <View
                  style={[styles.borderedText, {width: 120, marginTop: 4}]}
                />
                <Text style={[styles.text2]}>Floral Tubes</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.text2]}>Floral Design Supplies</Text>
                  <TouchableOpacity onPress={() => setData(!Data)} style={{}}>
                    <Icon
                      fontSize={16}
                      name={Data ? 'chevron-down' : 'chevron-up'}
                      style={{
                        color: Colors.textColor.Primary,
                        marginTop: 16,
                        paddingLeft: 8,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                {Data ? (
                  <View>
                    <Text
                      style={[
                        styles.text,
                        styles.text2,
                        {color: Colors.Primary},
                      ]}>
                      Butterfly Clasp
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        styles.text2,
                        {color: Colors.Primary},
                      ]}>
                      Butterfly Clasp
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        styles.text2,
                        {color: Colors.Primary},
                      ]}>
                      Orchid Clasps
                    </Text>
                    <Text
                      style={[
                        styles.text,
                        styles.text2,
                        {color: Colors.Primary},
                      ]}>
                      Tape
                    </Text>
                  </View>
                ) : null}
              </View>

              <View style={[styles.borderedText, {width: 150}]}>
                <Text style={[styles.text, styles.greentext]}>
                  Pest Management
                </Text>
              </View>
              <View style={[styles.borderedText, {width: 150, marginTop: 4}]} />
              <Text style={[styles.text2]}>Botanical Pesticides</Text>
              <Text style={[styles.text2]}>Chemical Pesticides</Text>
              <View style={[styles.borderedText, {width: 220}]}>
                <Text style={[styles.text, styles.greentext]}>
                  Botanical Health Products
                </Text>
              </View>
              <View style={[styles.borderedText, {width: 220, marginTop: 4}]} />
              <Text style={[styles.text2]}>Vitamins</Text>
              <Text style={[styles.text2]}>Supplement</Text>
              <View style={[styles.borderedText, {width: 220}]}>
                <Text style={[styles.text, styles.greentext]}>
                  Botanical Health Products
                </Text>
              </View>
              <View style={[styles.borderedText, {width: 220, marginTop: 4}]} />
              <Text style={[styles.text2]}>CBD Products</Text>
              <Text style={[styles.text2]}>CBD Oil</Text>
              <Text style={[styles.text2]}>CBD Supplement</Text>
            </View>
            <View style={{marginTop: 25}} />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {flex: 1},
  main: {flex: 1, paddingTop: 25},
  Borders: {
    borderWidth: 1,
    marginTop: 25,
    borderColor: Colors.textColor.Primary,
    marginVertical: 2,
    fontFamily: 'Poppins-Medium',
  },
  headtext: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Medium',
  },
  text: {
    // fontFamily: Fonts.default,
    fontSize: 18,
    color: Colors.Primary,
    letterSpacing: 0.9,
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    fontSize: 10,
    marginTop: 15,
    color: Colors.textColor.Primary,
    lineHeight: 14,
    fontFamily: 'Poppins-Regular',
  },
  greentext: {
    fontSize: 18,
    color: Colors.Primary,
    fontFamily: 'Poppins-Medium',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
    textDecorationColor: Colors.textColor.Primary,
    marginVertical: 5,
  },
  borderedText: {
    borderBottomWidth: 1,
    borderColor: Colors.textColor.Primary,
    fontFamily: 'Poppins-Regular',
  },
  borderedContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  text: {
    flexShrink: 1,
    fontFamily: 'Poppins-Regular',
  },
});
