import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import CartItems from '../../components/CartItems';
import HeaderComponent from '../../components/HeaderComponent';
import Colors from '../../assets/constatnts/Colors';
import {WIDTH} from '../../assets/constatnts/Dimentions';
import ButtonComponent from '../../components/ButtonComponent';
import Assets from '../../assets';
const CartScreen = ({navigation}) => {
  const [check, setChecked] = useState(false);
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
  const removeItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
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
          <View style={{marginTop: 25}}>
            <HeaderComponent headtext2={'Cart'} />
            <View style={{paddingHorizontal: 5}}>
              {items.map(item => (
                <>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      flexDirection: 'row',
                      marginTop: 5,
                    }}>
                    <CartItems
                      key={item.id}
                      card1
                      status={check}
                      checkpress={item.checkpress}
                      itemimage={item.image}
                      itemdescription={item.description}
                      count={item.count}
                      increment={() => increment(item.id)}
                      decrement={() => decrement(item.id)}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => removeItem(item.id)}
                    style={styles.iconview}>
                    <Icon name="x-circle" color={Colors.Primary} size={25} />
                  </TouchableOpacity>
                </>
              ))}
            </View>
            <View style={{paddingHorizontal: 15, marginTop: 10}}>
              <View style={styles.content}>
                <Text
                  style={[
                    styles.text,
                    {
                      marginTop: 5,
                      fontSize: 18,
                      fontFamily: 'Poppins-Bold',
                    },
                  ]}>
                  Summary
                </Text>
                <View style={[styles.row, {borderBottomWidth: 1}]}>
                  <Text style={[styles.text]}>Price (3 items)</Text>
                  <Text style={[styles.text]}>$66</Text>
                </View>
                <View style={[styles.row, {borderBottomWidth: 1}]}>
                  <Text style={[styles.text]}>Delivery Charge</Text>
                  <Text style={[styles.text]}>$3.52</Text>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.text]}>Total Price</Text>
                  <Text style={[styles.text]}>$69.52</Text>
                </View>
              </View>
            </View>
            <View style={{marginTop: 20, alignSelf: 'center'}}>
              <ButtonComponent
                btnfonSize={16}
                borderRadius={50}
                buttonText="Proceed to Pay"
                buttonColor={Colors.Primary}
                textColor={Colors.textColor.Primary}
                onPress={() => navigation.navigate('CheckOutScreen')}
                // onPress={getApiData}
                height={WIDTH <= 375 ? 48 : 53}
                width={WIDTH <= 375 ? 185 : 195}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Tertiary,
    letterSpacing: 0.9,
  },
  boldtext: {
    textAlign: 'center',
  },
  line: {
    width: '25%',
    alignSelf: 'center',
    borderBottomColor: '#000',
    backgroundColor: '#707070 ',
    opacity: 0.75,
    borderBottomWidth: 2,
  },
  iconview: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.textColor.Primary,
    borderRadius: 100,
    position: 'absolute',
    top: 2,
    left: 3,
  },
  headtextView: {
    paddingTop: 25,
  },
  headtext: {
    justifyContent: 'center',
    fontSize: 20,
    color: Colors.textColor.Primary,
  },
  content: {
    borderWidth: 1,
    borderColor: Colors.textColor.Primary,
    borderRadius: 20,
    paddingHorizontal: 25,
    marginTop: 15,
    paddingTop: 15,
    width: '100%',
  },
  mainview: {
    paddingHorizontal: 15,
    width: '100%',
    // borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.Tertiary,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  row: {
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: Colors.textColor.Primary,
  },
  inputView: {marginVertical: 10, backgroundColor: '#000'},
  text: {
    color: Colors.textColor.Primary,
    marginVertical: 5,
    fontFamily: 'Poppins-Regular',
  },
});
