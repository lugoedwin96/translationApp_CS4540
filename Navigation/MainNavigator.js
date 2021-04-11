import React, {useState,useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import { Card, ListItem, Button, Icon, Input } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import { useSelector, useDispatch } from 'react-redux';
import {ChangeTextButtonColor, ChangeVoiceButtonColor,} from '../reduxConfig/actions';

// Screens Imports
import TranslationInput from '../Screens/TranslationInput';
import TranslationOutput from '../Screens/TranslationOutput';
import SavedTranslations from '../Screens/SavedTranslations';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();


function HomeScreenStack() {

    //Below: this is used to change the color of the buttons in the header based on which is selected ;similar to the app design Khalil
    const [buttonColor, setButtonColor]= React.useState('red');

     //Below: state will just hold the current state of store (not pointing to anything specific in state)
    const state = useSelector((state) => state);
     //Below: instantiate the useDispatch for later dispatch calls
    const dispatch = useDispatch();

    return (
        
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor:'#4a69bd',
                height: responsiveHeight(15)
            },
            
        }}>
            
            <Stack.Screen name="TranslationInput" component={TranslationInput} options={{
                headerTitle: 'Translate',
                //Below: we will place a button to the left of header, i could not figure out how to put the header title above the button; like Khalils app design
                headerLeft: () => (
                    <Button
                    icon={{
                        name: "keyboard",
                        size: 30,
                        color: 'black'
                      }}
                        buttonStyle={{
                        backgroundColor: state.buttonColorKey.textButtonColor,
                        
                        }}
                        
                        containerStyle={{
                        marginTop: responsiveHeight(1),
                        marginLeft: responsiveWidth(4),
                        width: responsiveWidth(30),
                        //height: responsiveHeight(30)
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 25,
                        }}
                        titleStyle={{
                            color: 'black'
                        }}
                        title='Text'
                        //Below: on press of this button we will dispatch an action to change the color of the currently selected option (options: text or voice) to white
                        //       when this one is selected the 'text' options is picked and changes the color to white (selected)
                        //       not only when selected to we change the color to white but we save whether the users choice was textOrVoice as a string in buttonColorReducer
                        //       so if picked the users choice will be 'text' so then we can do some logic in TranslationInput to allow the user to type their text to translate
                        onPress={()=> dispatch(ChangeTextButtonColor())}
                       
                    />
                      
                  ),
                  headerRight: () => (
                    <Button
                    icon={{
                        name: "mic",
                        size: 30,
                        color: 'black'
                      }}
                        buttonStyle={{
                        backgroundColor: state.buttonColorKey.voiceButtonColor,
                        
                        }}
                        
                        containerStyle={{
                        marginTop: responsiveHeight(1),
                        marginRight: responsiveWidth(4),
                        width: responsiveWidth(30),
                        //height: responsiveHeight(30)
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 10,
                        borderRadius: 25,
                        }}
                        titleStyle={{
                            color: 'black'
                        }}
                        title='Voice'
                        //Below: on press of this button we will dispatch an action to change the color of the currently selected option (options: text or voice) to white
                        //       when this one is selected the 'voice' option is picked and changes the color to white (selected)
                        //       not only when selected to we change the color to white but we save whether the users choice was textOrVoice as a string in buttonColorReducer
                        //       so if picked the users choice will be 'voice' so then we can do some logic in TranslationInput to allow the user to use voice to submit their text to translate
                        onPress={()=> dispatch(ChangeVoiceButtonColor())}
                       
                    />
                  ),
            }}/>
            <Stack.Screen name="TranslationOutput" component={TranslationOutput} />
        </Stack.Navigator>
    );

};

function MyBottomTabNavigator() {

    return (
      //I used the example on the react native website to change the look of the tab when some tab is selected
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Translation Page') {
                iconName = focused
                  ? 'comment'
                  : 'comment';
              } else if (route.name === 'Saved Translations') {
                iconName = focused ? 'add-circle' : 'add-circle';
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#4a69bd',
            inactiveTintColor: 'grey',
          }}>
            <Tab.Screen name="Translation Page" component={HomeScreenStack} />
            <Tab.Screen name="Saved Translations" component={SavedTranslations} />
        </Tab.Navigator>
    );

}

export {HomeScreenStack, MyBottomTabNavigator};