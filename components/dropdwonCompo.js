import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Colors from '../assets/constatnts/Colors';
import {Picker} from '@react-native-picker/picker';

const DropdownComponent = props => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const [selectedValue, setSelectedValue] = React.useState('');
  const [selectedCountry, setSelectedCountry] = useState('US');
  const handleCountrySelect = country => {
    setSelectedCountry(country);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Replace the outermost View with ScrollView */}
        <SafeAreaView style={styles.wrapper}>
          {showMessage && (
            <View style={styles.message}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? 'true' : 'false'}</Text>
            </View>
          )}
          {props.index ? (
            <View style={styles.phoneInputContainer}>
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="DM"
                layout="first"
                onChangeText={text => {
                  setValue(text);
                }}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
                placeholder="Enter phone number"
                textInputStyle={{
                  backgroundColor: 'Transparent',
                  height: 40,
                  paddingTop: 10,
                  borderLeftWidth: 1,
                  borderColor: Colors.Tertiary,
                  paddingLeft: 10,
                  color: Colors.Secondary2,
                }}
                flagButtonStyle={{color: '#fff', height: 40, marginTop: 2}}
                countryPickerButtonStyle={[
                  {borderRightWidth: 1, borderColor: Colors.Tertiary},
                ]}
                textContainerStyle={[
                  {height: 44, backgroundColor: 'Transparent', color: '#fff'},
                ]}
                codeTextStyle={{
                  color: Colors.Tertiary,
                  fontSize: 12,
                }}
                disableArrowIcon
                containerStyle={{backgroundColor: Colors.basebg}}
                countryPickerProps={{
                  backgroundColor: Colors.basebg,
                  color: '#fff',
                }}
              />
            </View>
          ) : (
            <Picker
              selectedValue={selectedValue}
              onValueChange={itemValue => setSelectedValue(itemValue)}
              style={styles.picker}
              dropdownIconColor={Colors.Tertiary}
              itemStyle={styles.pickerItem}>
              <Picker.Item
                label={props.text1}
                value={props.text1}
                style={{color: Colors.Tertiary}}
              />
              <Picker.Item
                label={props.text2}
                value={props.text2}
                style={{color: Colors.Tertiary}}
              />
              <Picker.Item
                label={props.text3}
                value={props.text3}
                style={{color: Colors.Tertiary}}
              />
              <Picker.Item
                label={props.text4}
                value={props.text4}
                style={{color: Colors.Tertiary}}
              />
              {/* Add more girl names as desired */}
            </Picker>
          )}
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  wrapper: {
    // borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.Tertiary,
  },
  phoneInputContainer: {
    height: 44, // Specify the desired height here

    borderRadius: 5,
  },
  container: {
    // flex: 1,
    paddingHorizontal: 2,
    justifyContent: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.Tertiary,
    height: 44,
    borderRadius: 5,
    backgroundColor: 'Transparent',
    shadowColor: Colors.Secondary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  picker: {
    // height: 40,
    // padding: 8,
    // backgroundColor: '#f2f2f2',
    // borderRadius: 8,
    // height: 20,
    // padding: 8,
  },
  pickerItem: {
    color: 'red',
    fontSize: 1,
  },
});

export default DropdownComponent;
