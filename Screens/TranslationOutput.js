import React, {useState, Component, useEffect } from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon, Input, } from 'react-native-elements';
import { useSelector, useDispatch} from 'react-redux';
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import {TranslationToSave} from '../reduxConfig/actions';

const TranslationOuput = props => {

    
    //Below: state will just hold the current state of store (not pointing to anything specific in state)
    const state = useSelector((state) => state);
    //Below: instantiate the useDispatch for later dispatch calls
    const dispatch = useDispatch();
    //Below: submitText will take the translationToSave (currently just the string submitted by the user) and dispatch an action to save that string to the translations array
    const submitText = (translationToSave) => dispatch(TranslationToSave(translationToSave));
     //Below: translations will use the useSelector to pull the state directly
    const translations = useSelector(state => state.translationToSaveKey.translationToSave);



    useEffect(() => {


    }, []);
   //Below: page will currently display previously inputted text from user and an icon that onPress will send a dispatch to save that text/translation to store state
    return (
        <SafeAreaView style={styles.container}>
                {/* Below: this is the text displaying previously submitted text */}
                <Text style={styles.translatedText}> 
                    {state.textToTranslateKey.textToTranslate} 
                </Text>
                
                    <Icon
                        name='add-circle'
                        size={50}
                        color='#4a69bd'
                        onPress= {() =>
                            submitText(state.textToTranslateKey.textToTranslate)
                            } 
                    />
               {/*Below: this view just contains a flatlist that will populate what is saved in the translations array
                         this is here to see that it is properly being saved, we can remove this later */}
                <View style={styles.container2}>
                    <FlatList 
                        //ref={flatListRef}
                        style={styles.listContainer}
                        data={translations}
                        keyExtractor={(item, index) => item.key.toString()}
                        renderItem={
                            (data) =>
                            <Text>{data.item.translation}</Text>
                        }
                    />
                </View>
        </SafeAreaView>
    );

};


const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'white',
        padding: 16
      },
    //   listText: {
    //     fontSize: 30
    //   },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    translatedText:{
        fontSize: responsiveFontSize(4),
    },
    // saveTranslationButton: {
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     borderRadius: 25,
    //     backgroundColor: '#4a69bd'
    // }
});


export default  TranslationOuput;