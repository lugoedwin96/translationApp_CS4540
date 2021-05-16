import React, {useState, Component, useEffect } from 'react';
import {ActivityIndicator, SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon, Input, } from 'react-native-elements';
import { useSelector, useDispatch} from 'react-redux';
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import {TranslationToSave} from '../reduxConfig/actions';
import translate from 'google-translate-open-api';


const TranslationOuput = props => {

    
    //Below: state will just hold the current state of store (not pointing to anything specific in state)
    const state = useSelector((state) => state);
    //Below: instantiate the useDispatch for later dispatch calls
    const dispatch = useDispatch();
    //Below: submitText will take the translationToSave (currently just the string submitted by the user) and dispatch an action to save that string to the translations array
    const submitText = (translationToSave) => dispatch(TranslationToSave(translationToSave, languageFrom, languageTo, textToTranslate));
     //Below: translations will use the useSelector to pull the state directly
    const translations = useSelector(state => state.translationToSaveKey.translationToSave);
    //alert(JSON.stringify(state.textToTranslateKey));
    //alert(JSON.stringify(useSelector(state => state.translationToSaveKey)))

    //below: pulling all the data in state and setting them to some variables
    const textToTranslate = state.textToTranslateKey.textToTranslate;
    const languageFrom = state.textToTranslateKey.languageFrom;
    const languageTo = state.textToTranslateKey.languageTo;
  
    //below: storing the translation that comes back from the api
    const [translation, setTranslation] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    let [color, setColor] = useState("#478A8A");


    //Below: i leave the useEffect in case thats how we want to make a call to the google translate api so we can return the translation
    useEffect(() => {
        fetch(`https://translationapinodejs.herokuapp.com/translateTextFromTo/${textToTranslate}/${languageFrom}/${languageTo}`, {
            headers: { "Access-Control-Allow-Origin": "*", "Accept": "application/json"}
        })
        .then(res => res.text())
        .then(text => setTranslation(text))
        .finally(() => setIsLoading(false));
    }, []);

   //Below: page will currently display previously inputted text from user and an icon that onPress will send a dispatch to save that text/translation to store state
    return (
        <SafeAreaView style={styles.container}>
                {/* Below: this is the text displaying previously submitted text */}
                <Text style={styles.translatedText}> 
                {languageFrom}:
                </Text>
                <Text style={styles.translatedText}>
                {textToTranslate}  
                </Text>
                <Text style={styles.translatedText}>
                {languageTo}:
                </Text>
                <Text style={styles.translatedText}>
                {isLoading ?  <ActivityIndicator size="small" color="#0000ff" /> : translation}
                </Text>

                    <Icon
                        name='add-circle'
                        size={50}
                        color='#4a69bd'
                        onPress= {() =>
                            submitText(translation, languageFrom, languageTo, textToTranslate)
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
                            <Text>{data.item.languageFrom}:{data.item.textToTranslate}   {data.item.languageTo}:{data.item.translation}</Text>
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