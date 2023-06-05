import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Colors} from '../assets/constatnts/Colors';
import Assets from '../assets';
import Icon from 'react-native-vector-icons/Feather';

const Inputs = ({
  text,
  setText,
  placeholder,
  iconname,
  secureText,
  textColor,
  fontSize,
  multiLine,
  onFocus,
  onBlur,
  ImgIcon,
  width,
  keyboardType,
  disabled,
  borderRadius,
  bgColor,
  borderW,
  height,
  borderC,
  index,
}) => {
  const onChangeHandler = (value, name) => {
    // how to handle for each state field
    setText(form => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <>
      {index ? (
        <View>
          <CustomDropDown />
        </View>
      ) : (
        <View style={[styles.Inputs]}>
          <View style={{width: '90%'}}>
            <TextInput
              spellCheck={true}
              // blurOnSubmit={true}
              autoFocus
              placeholder={placeholder}
              placeholderTextColor={Colors.Tertiary}
              style={{
                fontFamily: 'Poppins-Regular',
                width: '90%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // borderRadius: borderRadius || 15,
                // backgroundColor: bgColor || null,
                // borderWidth: borderW || 0,
                // borderColor: borderC,
                // height: height || 45,
                color: Colors.Tertiary,
              }}
              secureTextEntry={secureText}
              multiline={multiLine}
              onFocus={onFocus || null}
              onBlur={onBlur || null}
              value={text}
              onChangeText={text => onChangeHandler(text, 'input1')}
              keyboardType={keyboardType || 'default'}
              editable={disabled}
            />
          </View>
          <View style={{paddingTop: 15}}>
            {ImgIcon ? (
              <Image
                source={ImgIcon}
                resizeMode="contain"
                style={{width: width, height: height}}
              />
            ) : (
              <View style={{}}>
                <Icon name={iconname} color={Colors.Primary} size={24} />
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};

const CustomDropDown = () => {
  const countries = [
    {
      country: 'Afghanistan',
      code: '93',
      iso: 'AF',
      flage: Assets.ICons.flage,
    },
    {country: 'Albania', code: '355', iso: 'AL', flage: Assets.ICons.flage},
    {country: 'Algeria', code: '213', iso: 'DZ', flage: Assets.ICons.flage},
    {
      country: 'American Samoa',
      code: '1-684',
      iso: 'AS',
      flage: Assets.ICons.flage,
      Email: 'abc@test.com',
      password: '@1234556',
    },
  ];
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState('');
  const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(countries);
    }
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={[styles.Inputs, {paddingTop: 5, paddingHorizontal: 5}]}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{fontWeight: '600'}}>
          {selectedCountry == '' ? (
            <View style={styles.mainview}>
              <Image
                source={Assets.ICons.flage}
                resizeMode="contain"
                style={styles.flage}
              />
              <Text style={styles.text}>+1</Text>
              <View style={styles.IconView}>
                {clicked ? (
                  <Icon name="chevron-up" color={Colors.Tertiary} size={24} />
                ) : (
                  <Icon name="chevron-down" color={Colors.Tertiary} size={24} />
                )}
              </View>
              <Text style={[styles.text, {color: '#fff'}]}>
                Enter Phone Number
              </Text>
            </View>
          ) : (
            selectedCountry
          )}
        </Text>
      </TouchableOpacity>
      {clicked ? (
        <View style={styles.inputView}>
          <TextInput
            placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={styles.input}
          />
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.innerTouchable}
                  onPress={() => {
                    setSelectedCountry(item.country);
                    setClicked(!clicked);
                    onSearch('');
                    setSearch('');
                  }}>
                  <View style={{paddingHorizontal: 15}}>
                    <Image
                      source={item.flage}
                      resizeMode="contain"
                      style={styles.flage}
                    />
                  </View>
                  <Text style={{paddingLeft: 15, color: '#fff'}}>
                    {item.country}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  Inputs: {
    width: '100%',
    paddingHorizontal: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.Tertiary,
    height: 43,
    borderRadius: 5,
    backgroundColor: Colors.Secondary,
    shadowColor: Colors.Secondary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  inputView: {
    elevation: 5,
    marginTop: 20,
    height: 150,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  innerTouchable: {
    width: '80%',
    // alignSelf: 'center',
    height: 50,
    // justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#8e8e8e',
    flexDirection: 'row',
    paddingLeft: 25,
  },
  input: {},
  flage: {
    width: 34,
    height: 24,
  },
  IconView: {
    // paddingHorizontal: 5,
    borderLeftWidth: 1,
    borderColor: Colors.Tertiary,

    borderRightWidth: 1,
  },
  mainview: {flexDirection: 'row', justifyContent: 'space-between'},
  touchableView: {
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputView: {
    elevation: 5,
    marginTop: 20,
    height: 300,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: Colors.Tertiary,
    borderRadius: 10,
  },
  innerTouchable: {
    width: '80%',
    // alignSelf: 'center',
    height: 50,
    // justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#8e8e8e',
    flexDirection: 'row',
    paddingLeft: 25,
  },

  flage: {
    width: 34,
    height: 24,
  },
  IconView: {
    paddingHorizontal: 5,
    borderLeftWidth: 1,
    borderColor: Colors.Tertiary,
    borderRightWidth: 1,
    marginHorizontal: 5,
  },
  text: {
    marginHorizontal: 5,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.Tertiary,
    // letterSpacing: 0.9,
    lineHeight: 22,
  },
});

export default Inputs;
