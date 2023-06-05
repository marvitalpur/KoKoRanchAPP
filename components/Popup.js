import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, TextInput} from 'react-native';
import Colors from '../assets/constatnts/Colors';
import {TouchableOpacity} from 'react-native';
import ButtonComponent from './ButtonComponent';
import {WIDTH} from '../assets/constatnts/Dimentions';
import {CheckIcon} from '../assets/svgs/AllIcons';
import {MD3Colors, ProgressBar} from 'react-native-paper';
import Inputs from './Inputs';
import Icon from 'react-native-vector-icons/Feather';
import {FlatList} from 'react-native-gesture-handler';
import DropdownComponent from './dropdwonCompo';

const Popup = ({
  modalVisible,
  setModalVisible,
  modal1,
  modal2,
  modal3,
  modal4,
  modal5,
  paragraph,
  btntext,
  meassagebox,
  onPress,
  iconPress,
  headtext,
  index,
  btnPress,
  padding1,
}) => {
  const data = [
    {
      name: 'John Doe',
      data: 'Dec-12-2021 12:32 PM',
      comments:
        'Lorem ipsum dolor sit amet, consetetur sadiplitr,sed diam nonumy eirmod.elitr, sed diam nonumyeirmodam nonumy eirmod.',
    },
    {
      name: 'Susan',
      data: 'Dec-12-2021 12:32 PM',
      comments:
        'Lorem ipsum dolor sit amet, consetetur sadiplitr,sed diam nonumy eirmod.elitr, sed diam nonumyeirmodam nonumy eirmod.',
    },

    {
      name: 'Smantha',
      data: 'Dec-12-2021 12:32 PM',
      comments:
        'Lorem ipsum dolor sit amet, consetetur sadiplitr,sed diam nonumy eirmod.elitr, sed diam nonumyeirmodam nonumy eirmod.',
    },
  ];
  return (
    <View style={styles.centeredView}>
      {modal1 && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.textRow}>
                <Text style={styles.modalText}>slider</Text>
                <Text style={styles.modalText}>$1.99 - $ 4098</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: Colors.Tertiary,
                  height: 1,
                }}
              />

              <Text style={styles.modalText}>Price</Text>
              <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.modalText}>Price</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.Tertiary,
                    height: 1,
                  }}
                />
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.modalText}>Price</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.modalText}>Price</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
      {modal2 && (
        <View style={{backgroundColor: 'green'}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={modalVisible}
            style={{borderWidth: 2}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView2}>
                <View style={{marginVertical: 25}}>
                  <CheckIcon />
                </View>
                <Text
                  style={[styles.modalText1, {paddingHorizontal: padding1}]}>
                  {paragraph}
                </Text>
                <ButtonComponent
                  btnfonSize={16}
                  borderRadius={50}
                  buttonText={btntext}
                  buttonColor={Colors.Primary}
                  textColor={Colors.textColor.Primary}
                  onPress={onPress}
                  // onPress={getApiData}
                  height={WIDTH <= 375 ? 40 : 55}
                  width={WIDTH <= 375 ? 125 : 175}
                />
              </View>
            </View>
          </Modal>
        </View>
      )}
      {modal3 && (
        <View style={{flex: 1}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={modalVisible}>
            {meassagebox ? (
              <>
                <View style={styles.modalView3}></View>
              </>
            ) : (
              <View>
                <View style={styles.modalView3}>
                  <TouchableOpacity
                    onPress={iconPress}
                    style={{alignSelf: 'flex-end'}}>
                    <Icon
                      name="x-circle"
                      size={28}
                      color={Colors.textColor.Primary}
                    />
                  </TouchableOpacity>
                  <Text
                    numberOfLines={3}
                    adjustsFontSizeToFit={true}
                    style={[styles.textA, {fontSize: 20, marginVertical: 5}]}>
                    Comments
                  </Text>
                  <FlatList
                    data={data}
                    renderItem={({item}) => {
                      return (
                        <>
                          <View style={styles.comments}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text style={styles.name}>{item.name}</Text>
                              <Text style={[styles.paragraph]}>
                                {item.date}
                              </Text>
                            </View>
                            <Text style={styles.paragraph}>
                              {item.comments}
                            </Text>
                          </View>
                        </>
                      );
                    }}
                  />
                  <View style={styles.input}>
                    <View style={{alignSelf: 'flex-start', width: '60%'}}>
                      <TextInput
                        placeholderTextColor={Colors.Tertiary}
                        placeholder="Comment Here"
                        style={{
                          paddingLeft: 20,
                          color: Colors.textColor.Primary,
                        }}
                      />
                    </View>
                    <View style={{paddingTop: 1}}>
                      <ButtonComponent
                        btnfonSize={16}
                        borderRadius={50}
                        buttonText={btntext}
                        buttonColor={Colors.Primary}
                        textColor={Colors.textColor.Primary}
                        onPress={onPress}
                        // onPress={getApiData}
                        height={WIDTH <= 375 ? 45 : 45}
                        width={WIDTH <= 375 ? 100 : 110}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          </Modal>
        </View>
      )}
      {modal4 && (
        <View style={{backgroundColor: 'green'}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
            style={{borderWidth: 2}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView4}>
                <View style={styles.textRow}>
                  <Text style={[styles.textA]}>Slider</Text>
                  <Text style={styles.textA}>$1.99 - $4098</Text>
                </View>
                <View
                  style={{
                    marginTop: 25,
                    width: '90%',
                    borderBottomWidth: 1,
                    paddingBottom: 15,
                    borderBottomColor: Colors.Tertiary,
                  }}>
                  <ProgressBar progress={0.5} color={Colors.Primary} />
                </View>
                <View style={{marginTop: 25}}>
                  <Text style={[styles.textA]}>Price</Text>
                  <View style={styles.btnRow}>
                    <View style={styles.btnOutline}>
                      <Text style={[styles.textA]}>Price</Text>
                    </View>
                    <View
                      style={{
                        borderWidth: 1,
                        height: 1,
                        borderColor: Colors.Tertiary,
                        width: WIDTH <= 375 ? 15 : 20,
                        margin: 2,
                      }}
                    />
                    <View style={styles.btnOutline}>
                      <Text style={[styles.textA]}>Price</Text>
                    </View>
                    <View style={{paddingHorizontal: 5}}>
                      <ButtonComponent
                        btnfonSize={16}
                        borderRadius={5}
                        buttonText={'Apply'}
                        buttonColor={Colors.Primary}
                        textColor={Colors.textColor.Primary}
                        onPress={onPress}
                        // onPress={getApiData}
                        height={WIDTH <= 375 ? 40 : 45}
                        width={WIDTH <= 375 ? 80 : 90}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.inputexview}>
                  <Text style={[styles.textA]}>Price</Text>
                  <View>
                    <DropdownComponent
                      text1={'All'}
                      text2={'category1'}
                      text3={'category2'}
                    />
                  </View>
                </View>
                <View style={{marginVertical: 15}}>
                  <ButtonComponent
                    btnfonSize={16}
                    borderRadius={10}
                    buttonText={btntext}
                    buttonColor={Colors.Primary}
                    textColor={Colors.textColor.Primary}
                    onPress={onPress}
                    // onPress={getApiData}
                    height={WIDTH <= 375 ? 40 : 45}
                    width={WIDTH <= 375 ? 155 : 195}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
      {modal5 && (
        <View style={{backgroundColor: 'green'}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
            style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.centeredView}>
              <View
                style={[
                  styles.modalView4,
                  {borderWidth: 0.4, borderColor: Colors.Tertiary},
                ]}>
                <TouchableOpacity
                  onPress={iconPress}
                  style={{alignSelf: 'flex-end'}}>
                  <Icon
                    name="x-circle"
                    size={28}
                    color={Colors.textColor.Primary}
                  />
                </TouchableOpacity>
                <Text
                  numberOfLines={3}
                  adjustsFontSizeToFit={true}
                  style={[styles.textA, {fontSize: 20, marginVertical: 5}]}>
                  {headtext}
                </Text>
                {index ? (
                  <>
                    <View style={{alignSelf: 'flex-start'}}>
                      <Text
                        numberOfLines={3}
                        adjustsFontSizeToFit={true}
                        style={[
                          styles.textA,
                          {fontSize: 16, color: Colors.Tertiary},
                        ]}>
                        Message
                      </Text>
                    </View>
                    <View style={[styles.Popup5, {height: 250}]}>
                      <TextInput
                        placeholder="Enter something..."
                        // value={inputValue}
                        placeholderTextColor={Colors.Tertiary}
                        style={styles.textInput}
                        // onChangeText={value => setInputValue(value)}
                      />
                    </View>
                    <View style={{alignSelf: 'center', marginTop: 10}}>
                      <ButtonComponent
                        btnfonSize={16}
                        borderRadius={25}
                        buttonText={btntext}
                        buttonColor={Colors.Primary}
                        textColor={Colors.textColor.Primary}
                        onPress={btnPress}
                        // onPress={getApiData}
                        height={WIDTH <= 375 ? 40 : 45}
                        width={WIDTH <= 375 ? 100 : 140}
                      />
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.Popup5}>
                      <Text
                        numberOfLines={3}
                        adjustsFontSizeToFit={true}
                        style={[styles.textA]}>
                        Shipping and handling
                      </Text>
                      <View style={styles.textview5}>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Item Location:
                        </Text>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Canada
                        </Text>
                      </View>
                      <View style={styles.textview5}>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Shipping To :
                        </Text>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Globaly
                        </Text>
                      </View>
                      <View style={styles.textview5}>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Delivery :
                        </Text>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Local Estimated 14 Days {'\n'}
                          Global Estimated 30 Days
                        </Text>
                      </View>
                      <View style={styles.textview5}>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Return :
                        </Text>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Local Estimated 14 Days{'\n'}pays for return shipping
                        </Text>
                      </View>
                      <View style={styles.textview5}>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Shipping and Handling :
                        </Text>
                        <Text
                          numberOfLines={3}
                          adjustsFontSizeToFit={true}
                          style={[styles.textA, styles.textb]}>
                          Free Shipping
                        </Text>
                      </View>
                    </View>
                  </>
                )}
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'green',
    marginTop: 30,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textRow: {},

  btnView: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    // textAlign: 'center',
    paddingTop: 10,
    color: Colors.textColor.Primary,
  },
  modalText1: {
    lineHeight: 25,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Regular',
    marginVertical: 25,
  },
  modalView2: {
    position: 'absolute',
    top: 40,
    backgroundColor: Colors.Secondary,
    borderRadius: 5,
    padding: 35,
    // alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView3: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 120,
    backgroundColor: Colors.Secondary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.Tertiary,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView4: {
    alignSelf: 'center',
    backgroundColor: Colors.Secondary,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    top: 120,
    right: 20,
    left: 20,
    borderRadius: 15,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    color: Colors.textColor.Primary,
    paddingTop: 5,
  },
  paragraph: {
    color: Colors.textColor.Tertiary,
    lineHeight: 18,
    paddingTop: 5,
  },
  comments: {
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.textColor.Tertiary,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  input: {
    backgroundColor: Colors.basebg,
    marginTop: 15,
    flexDirection: 'row',
    borderRadius: 25,
    justifyContent: 'space-between',
  },
  textRow: {
    marginTop: 25,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Colors.Tertiary,
    width: '90%',
  },
  btnRow: {
    width: '90%',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    alignSelf: 'center',
    borderColor: Colors.Tertiary,
  },
  textA: {
    lineHeight: 20,
    fontSize: 12,
    paddingTop: 5,
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Regular',
  },
  btnOutline: {
    borderRadius: 5,
    alignSelf: 'center',
    height: WIDTH <= 375 ? 40 : 45,
    width: WIDTH <= 375 ? 70 : 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Tertiary,
  },
  inputexview: {
    width: '90%',
  },
  textb: {
    lineHeight: 25,
    fontSize: 10,
    paddingTop: 5,
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Regular',
  },
  textview5: {
    // marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.Tertiary,
  },
  textInput: {
    width: '80%',
    borderRadius: 5,
    paddingVertical: 20,
    padding: 20,
    marginBottom: 15,
    color: Colors.Tertiary,
    fontFamily: 'Poppins-Regular',
  },
  Popup5: {
    marginTop: 10,
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingRight: 35,
    paddingBottom: 10,
    alignSelf: 'center',
    borderColor: Colors.Tertiary,
    borderRadius: 5,
  },
});

export default Popup;
