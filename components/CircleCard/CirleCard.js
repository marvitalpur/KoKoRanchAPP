import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../assets';
import Colors from '../../assets/constatnts/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CircleCard = props => {
  const [data1, setdata1] = useState(0);
  const Data = [
    {
      img1: Assets.bottel.bottel1,
      text: 'Plants',
      st: 0,
      down: 'chevron-down',
      right: 'chevron-right',
      imgCard: props.imgCard1,
    },
    {
      img1: Assets.bottel.bottel1,
      text: 'Plant Nutrients',
      st: 1,
      down: 'chevron-down',
      right: 'chevron-right',
      imgCard: props.imgCard2,
    },
    {
      img1: Assets.bottel.bottel1,
      text: 'Plant Media',
      st: 2,
      down: 'chevron-down',
      right: 'chevron-right',
      imgCard: props.imgCard3,
    },
    {
      img1: Assets.bottel.bottel1,
      text: 'Plant Containers',
      st: 3,
      down: 'chevron-down',
      right: 'chevron-right',
      imgCard: props.imgCard4,
    },
    {
      img1: Assets.bottel.bottel5,
      text: 'Plant Containers',
      st: 4,
      down: 'chevron-down',
      right: 'chevron-right',
      imgCard: props.imgCard5,
    },
    {
      text2: 'Meet Bird women',
      st: 4,
      iconname: 'arrow-right',
      imgCard: props.imgCard6,
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.main}>
        {props.cards ? (
          <FlatList
            data={Data}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <>
                  <View
                    style={{
                      paddingTop: 25,
                      paddingHorizontal: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => (index === true ? '' : setdata1(index))}
                      style={{alignSelf: 'center'}}>
                      <>
                        {data1 === index ? (
                          <LinearGradient
                            colors={[Colors.Secondary2, Colors.Tertiary2]}
                            style={[styles.SquareView, {}]}>
                            <Image
                              source={item.imgCard}
                              style={styles.imgCard}
                              resizeMode="contain"
                            />
                          </LinearGradient>
                        ) : (
                          <View style={styles.SquareView}>
                            <Image
                              source={item.imgCard}
                              style={styles.imgCard}
                              resizeMode="contain"
                            />
                          </View>
                        )}
                      </>
                    </TouchableOpacity>
                  </View>
                  {/* data1 === index ? 'chevron-down' : 'chevron-right' */}
                </>
              );
            }}
          />
        ) : (
          <FlatList
            data={Data}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <>
                  <View
                    style={{
                      paddingTop: 25,
                      paddingHorizontal: 8,
                    }}>
                    <TouchableOpacity
                      onPress={() => (index === true ? '' : setdata1(index))}
                      style={{alignSelf: 'center'}}>
                      <>
                        {data1 === index ? (
                          <LinearGradient
                            colors={[Colors.Secondary2, Colors.Tertiary2]}
                            style={[
                              styles.circleview,
                              {
                                // backgroundColor:
                                //   data1 === index ? '#CD258D' : '',
                              },
                            ]}></LinearGradient>
                        ) : (
                          <View style={styles.circleview}></View>
                        )}
                      </>
                    </TouchableOpacity>
                    <View>
                      <View style={styles.imgview}>
                        <View style={{backgroundColor: 'green'}}>
                          <Image
                            source={item.img1}
                            style={styles.img}
                            resizeMode="contain"
                          />
                        </View>
                        <View style={styles.textview}>
                          <Text
                            adjustsFontSizeToFit={true}
                            numberOfLines={3}
                            style={styles.insidetext}>
                            {item.text2}
                          </Text>
                          <Icon
                            name={item.iconname}
                            size={22}
                            color={Colors.textColor.Secondary}
                            style={{alignSelf: 'center'}}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                      <Text
                        numberOfLines={2}
                        adjustsFontSizeToFit={true}
                        style={[
                          styles.txt1,
                          {
                            color: data1 === index ? Colors.Primary : '#ffff',
                            paddingTop: 10,
                          },
                        ]}>
                        {item.text}
                      </Text>
                      <Icon
                        fontSize={16}
                        name={data1 === index ? item.down : item.right}
                        style={{
                          textAlign: 'center',
                          color: data1 === index ? Colors.Primary : '#ffff',
                          marginTop: 11,
                        }}
                      />
                    </View>
                  </View>
                  {/* data1 === index ? 'chevron-down' : 'chevron-right' */}
                </>
              );
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};
export default CircleCard;
const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // justifyContent: 'center',
    // borderRadius: 100,
    // alignItems: 'center',
  },
  circleview: {
    // margin: 5,
    borderWidth: 2,
    width: 95, // Use responsive width
    height: 95,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary2,
  },
  SquareView: {
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
  },
  img: {
    width: 80, // Use responsive width
    height: 80, // Use responsive width for consistent aspect ratio
    position: 'absolute',
    top: -hp('14%'), // Use responsive height
    alignSelf: 'center',
  },
  imgCard: {
    width: 80, // Use responsive width
    height: 80,
    alignSelf: 'center', // Use responsive width for consistent aspect ratio
    // position: 'absolute',
  },
  insidetext: {
    textAlign: 'center',
    color: Colors.textColor.Secondary,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 3,
  },
  txt: {
    textAlign: 'left',
    fontSize: wp('5%'), // Use responsive font size
    color: '#1C5C2E',
    marginVertical: hp('2%'), // Use responsive height
    fontFamily: 'Poppins-Regular',
  },
  txt1: {
    textAlign: 'center',
    fontSize: wp('2.5%'), // Use responsive font size
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Regular',
  },
  imgview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textview: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -hp('9%'), // Use responsive height
    left: wp('3.5%'), // Use responsive width
    bottom: 10,
  },
});
