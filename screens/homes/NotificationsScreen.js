import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import Assets from '../../assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../assets/constatnts/Colors';
import { Setting } from '../../assets/svgs/Drawersvg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Switch } from 'react-native-paper';
import HeaderComponent from '../../components/HeaderComponent';

const SettingScreen = props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.BackgrounImages.bg1}
        resizeMode="cover"
        style={styles.image}>
        <View style={{ marginTop: 15 }}>
          <HeaderComponent
            onPress={() => props.navigation.goBack()}
            headtext={'Notification Setting'}
          />
        </View>
        <View style={styles.headtextView}>
          <View style={styles.content}>
            <View style={styles.maiview}>
              <Text style={styles.text}>App Notifications</Text>
              <View style={{}}>
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color={Colors.Primary}
                />
              </View>
            </View>
            <View style={styles.maiview}>
              <Text style={styles.text}>Email Notifications</Text>
              <View style={{}}>
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color={Colors.Primary}
                />
              </View>
            </View>
          </View>
        </View>
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
  },
  headtext: {
    justifyContent: 'center',
    fontSize: 20,
    color: Colors.textColor.Primary,
  },
  maiview: {
    width: '100%',
    height: 43,
    borderColor: Colors.Tertiary,
    // backgroundColor: 'green',

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 15,
  },
  content: {
    marginTop: 10,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  text: {
    color: Colors.textColor.Primary,
    fontFamily: 'Poppins-Regular',
  },
});
