import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import RootStack from './navigation/RootStack';
import {MenuProvider} from 'react-native-popup-menu';
import MyStatusBar from './components/MyStatusbar';
import FlashMessage from 'react-native-flash-message';
import {store, persistor} from './redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const myLocalFlashMessage = useRef(null);
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text>Start Loading ....</Text>}
        persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <MenuProvider>
            <GestureHandlerRootView style={{flex: 1}}>
              <MyStatusBar
                backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#000'}
                barStyle={Platform.OS === 'ios' ? 'dark' : 'light-content'}
              />
              <RootStack />
              <FlashMessage ref={myLocalFlashMessage} />
            </GestureHandlerRootView>
          </MenuProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
