import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreenStack, MyBottomTabNavigator} from './Navigation/MainNavigator'
import { Provider } from 'react-redux';
import {store} from './reduxConfig/store'

const App = () => {
  return (
     <Provider store={store}>
      <Navigators />
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