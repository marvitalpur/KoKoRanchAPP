import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Assets from '../../assets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import {Setting} from '../../assets/svgs/Drawersvg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderComponent from '../../components/HeaderComponent';
import Icon from 'react-native-vector-icons/Feather';

const SettingScreen = props => {
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
          <View style={{paddingHorizontal: 5, marginTop: 15}}>
            <HeaderComponent
              onPress={() => props.navigation.navigate('Home')}
              headtext2="Setting"
            />
          </View>
          <View style={styles.headtextView}>
            <View style={styles.content}>
              <View style={styles.maiview}>
                <Text style={styles.text}>Notifications</Text>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('NotificationsScreen')
                  }
                  style={styles.icon}>
                  <Icon
                    name="chevron-right"
                    color={Colors.textColor.Primary}
                    size={16}
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginVertical: 5}} />
              <View style={styles.maiview}>
                <Text style={styles.text}>Notifications</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('ChangePassword')}
                  style={styles.icon}>
                  <Icon
                    name="chevron-right"
                    color={Colors.textColor.Primary}
                    size={16}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  image: {
    flex: 1,
  },
  headtextView: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 15,
  },
  headtext: {
    justifyContent: 'center',
    fontSize: 20,
    color: Colors.textColor.Primary,
  },
  maiview: {
    // marginTop: 25,
    width: '100%',
    height: 43,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.Tertiary,
    // backgroundColor: 'green',

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 15,
  },
  content: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
  },
  text: {
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Regular',
  },
});
