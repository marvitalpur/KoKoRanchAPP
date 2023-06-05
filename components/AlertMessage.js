import React from 'react';
import {Dimensions} from 'react-native';
import {showMessage} from 'react-native-flash-message';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const AlertMessage = () => {
  const showMessage = message => {
    showMessage({
      message: message,
      type: 'info',
      autoHide: true,
      duration: 2500,
      position: 'top',
      backgroundColor: '',
      color: Colors.onPrimaryColor, // Assuming Colors.onPrimaryColor is imported or defined somewhere
      style: {
        padding: SCREEN_WIDTH / 80,
      },
    });
  };

  return null;
};

export default AlertMessage;
