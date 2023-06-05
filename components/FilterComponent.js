import {StyleSheet, Text, FlatList, View} from 'react-native';
import React from 'react';
import Colors from '../assets/constatnts/Colors';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const FilterComponent = ({
  onPress1,
  onPress2,
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  headtext,

  AllFilter,
}) => {
  const data = [
    {text: text1},
    {text: text2},
    {text: text3},
    {text: text4},
    {text: text5},
  ];
  return (
    <>
      <View style={{flex: 1, marginVertical: 20}}>
        {/* <View
          style={{
            borderBottomWidth: 2,
            borderColor: Colors.Primary,
            alignSelf: 'center',
          }}>
          <View
            style={{
              // flex: 1,
              alignSelf: 'center',
              borderBottomWidth: 2,
              borderColor: Colors.Primary,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: Colors.textColor.Primary,
                letterSpacing: 3,
                lineHeight: 22,
              }}>
              {title}
            </Text>
          </View>
        </View> */}
        {AllFilter ? (
          <View style={styles.container}>
            <TouchableOpacity onPress={onPress1} style={styles.leftView}>
              <Icon
                name="filter"
                color={Colors.Primary}
                size={14}
                style={{paddingRight: 10}}
              />
              <Text style={[styles.text, {color: Colors.Primary}]}>Filter</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress2} style={styles.RightView}>
              <Menu>
                <MenuTrigger>
                  <Text style={{color: Colors.textColor.Primary}}>
                    {headtext}
                  </Text>
                </MenuTrigger>
                <MenuOptions style={{}}>
                  <FlatList
                    data={data}
                    renderItem={({item}) => (
                      <MenuOption>
                        <Text
                          style={{
                            padding: 5,
                            lineHeight: 16,
                            color: Colors.Tertiary,
                            fontSize: 12,
                            fontFamily: 'Poppins-Light',
                            textAlign: 'center',
                          }}>
                          {item.text}
                        </Text>
                      </MenuOption>
                    )}
                  />
                </MenuOptions>
              </Menu>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{flex: 1, paddingHorizontal: 15}}>
            <TouchableOpacity
              onPress={onPress2}
              style={[styles.RightView, {alignSelf: 'flex-end'}]}>
              <Menu>
                <MenuTrigger>
                  <Text style={{color: Colors.textColor.Primary}}>
                    {headtext}
                  </Text>
                </MenuTrigger>
                <MenuOptions style={{}}>
                  <FlatList
                    data={data}
                    renderItem={({item}) => (
                      <MenuOption>
                        <Text
                          style={{
                            padding: 5,
                            lineHeight: 16,
                            color: Colors.Tertiary,
                            fontSize: 12,
                            fontFamily: 'Poppins-Light',
                            textAlign: 'center',
                          }}>
                          {item.text}
                        </Text>
                      </MenuOption>
                    )}
                  />
                </MenuOptions>
              </Menu>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default FilterComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    flexDirection: 'row',
  },
  mainView: {
    borderBottomWidth: 2,
    borderColor: Colors.Primary,
    alignSelf: 'center',
  },
  leftView: {
    padding: 5,
    // paddingHorizontal: 15,
    flexDirection: 'row',
  },
  RightView: {
    // width: 100,
    borderWidth: 1,
    borderColor: Colors.textColor.Primary,
    padding: 5,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
  },
});
