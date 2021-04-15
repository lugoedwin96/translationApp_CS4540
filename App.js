import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreenStack, MyBottomTabNavigator} from './Navigation/MainNavigator'
import { Provider } from 'react-redux';
import reduxPersistStore from './reduxConfig/store'
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const {store, persistor}= reduxPersistStore();
  return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <Navigators />
      </PersistGate>
     </Provider>
  )
}

const Navigators = props => {
	return (
   
		<NavigationContainer>
			 <MyBottomTabNavigator />
		</NavigationContainer>
    
    
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;