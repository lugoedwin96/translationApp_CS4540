
import React, {useState,useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { Card, ListItem, Button, Icon, Input, } from 'react-native-elements';
import {TextToTranslate, TranslationToSave} from '../reduxConfig/actions';
import { useSelector, useDispatch } from 'react-redux';
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";


const TranslationInput = props => {

    const [textToTranslate, setTextToTranslate]= useState('');
    //Below: a placeholder for languages we are translating to/from, once we connect google translate api we can pull the languages from that
    const english = 'English';
    const spanish = 'Spanish';
    //Below: state will just hold the current state of store (not pointing to anything specific in state)
    const state = useSelector((state) => state);
    //Below: instantiate the useDispatch for later dispatch calls
    const dispatch = useDispatch();
    //Below: submitText will take the textToTranslate (currently just the string submitted by the user) and dispatch an action to save it to a string
    //       the difference here is that we dont care to save everything submitted so when we dispatch the action to save to string it will replace the previous state
    //       its only on the next screen that the user can decide to press the + icon and save to an array
    //       but I was also thinking maybe we can save everything the user has asked to translate and allow them to scroll through them all later and add any to that saved array
    //       but for now its just simple and we only save on the translationOutput screen
    const submitText = (textToTranslate) => dispatch(TextToTranslate(textToTranslate, english, spanish))
    //const storeSomeText = (translationToSave) => dispatch(TranslationToSave(translationToSave, languageFrom, languageTo, textToTranslate));

    //below: this is the only way i figured out to store some translations in state so when the app loads there is some stuff saved in the state
    //       this will give the impression that we have a database!
    const mount = true
    useEffect(() => {
        
    const storedTranslation1 = 'gusanos';
    const storedLanguageFrom1 = 'English';
    const storedLanguageTo1 = 'Spanish';
    const storedTextToTranslate1 = 'worms';

    const storedTranslation2 = 'vermi';
    const storedLanguageFrom2 = 'English';
    const storedLanguageTo2 = 'Italian';
    const storedTextToTranslate2 = 'worms';

    const storedTranslation3 = 'vermes';
    const storedLanguageFrom3 = 'English';
    const storedLanguageTo3 = 'portuguese';
    const storedTextToTranslate3 = 'worms';

    dispatch(TranslationToSave(storedTranslation1, storedLanguageFrom1, storedLanguageTo1, storedTextToTranslate1))
    dispatch(TranslationToSave(storedTranslation2, storedLanguageFrom2, storedLanguageTo2, storedTextToTranslate2))
    dispatch(TranslationToSave(storedTranslation3, storedLanguageFrom3, storedLanguageTo3, storedTextToTranslate3))

    }, [mount]);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            {/*Below: this will allow the user to click anywhere on the screen after the keyboard is open to hide the keyboard */}
            <TouchableWithoutFeedback style={styles.hideKeyboard} onPress={() => Keyboard.dismiss()}>
                {/*Below: this will padd the screen so that when the keyboard comes up nothing will be blocked */}
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.textInputContainer}>
                {/*Below: this is a react-native-elements input that takes the users text to translate */}
                <Input
                    placeholder='Text To Translate'
                    leftIcon={
                        <Icon
                        name='comment'
                        size={24}
                        color='black'
                        />
                    } 
                    value={textToTranslate} 
                    onChangeText={(text) => setTextToTranslate(text)}
                    containerStyle={{
                        //marginTop: responsiveHeight(2),
                        //marginLeft: responsiveWidth(2),
                        // width: responsiveWidth(99),
                        // height: responsiveHeight(30),
                        // borderWidth: 1,
                        // borderColor: 'black',
                        
                        }}
                        inputContainerStyle={{
                            //marginTop: responsiveHeight(-2),
                            //marginLeft: responsiveWidth(-2),
                            width: responsiveWidth(99),
                            height: responsiveHeight(20),
                            // borderWidth: 1,
                            // borderColor: 'black',
                            borderBottomWidth : 0
                            }}
                        inputStyle={{
                            color: 'black',
                            fontSize: responsiveFontSize(4),
                        }}

                        multiline={true}
                        numberOfLines={5}
                        underlineColor={"transparent"}
                    />
            
            </View>
            <View style={styles.translateButtonContainer}>
                {/*Below: this is a react-native-elements button for when the user wants to submit their text to translate */}
            <Button 
                title="Translate" 
                titleStyle={{
                            color: 'white'
                        }}
                buttonStyle={{
                    backgroundColor: '#4a69bd',
                            
                        }}
                containerStyle={{
                        //marginTop: responsiveHeight(2),
                        //marginLeft: responsiveWidth(2),
                        width: responsiveWidth(35),
                        //height: responsiveHeight(6),
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 25,
                        }}
                onPress={() => {
                    //Below: we will dispatch action with submitText to update the string in state to the currently submitted text to translate by user
                    submitText(textToTranslate, english, spanish)
                    //Below: navigates over to the TranslationOutput screen
                  props.navigation.navigate('TranslationOutput')

                }} />
            </View>
            {/*Below: this view is a placeholder for if we are going to want to render translations to this screen, this might be where it goes */}
            <View style={{ flex: .5}}>

            </View>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
       
    );

};


const styles = StyleSheet.create({
safeAreaView: {
    flex: 1,
},
hideKeyboard: {
    flex: 1,
},
container:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    //backgroundColor: backgroundColor,
},
textInputContainer:{
    flex: 1/2,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    //backgroundColor: backgroundColor,
},
translateButtonContainer:{
    flex: 1/9,
    flexDirection: 'row',
    alignItems:'center',
    //justifyContent: 'center',
    backgroundColor: '#ced6e0',
    width: responsiveWidth(100),
    padding: 10,
    borderWidth: .3,
    //borderColor: 'black',
    //borderRadius: 25,
}
});


export default TranslationInput;