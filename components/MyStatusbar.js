import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <StatusBar translucent backgroundColor={backgroundColor} {...props} />
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHRT = Platform.OS === 'ios' ? 44 : 56;

export default MyStatusBar;
const styles = StyleSheet.create({
  StatusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
