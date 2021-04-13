import React, {useState, Component, useEffect } from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon, Input, } from 'react-native-elements';
import { useSelector, useDispatch} from 'react-redux';
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import {TranslationToDelete} from '../reduxConfig/actions';

const TranslationOuput = props => {

    
    const state = useSelector((state) => state);
    //const submitText = (translationToSave) => dispatch(TranslationToSave(translationToSave));

    //Below: instantiate the useDispatch for later dispatch calls
    const dispatch = useDispatch();
    //Below: translations will use the useSelector to pull the state directly
    const translations = useSelector(state => state.translationToSaveKey.translationToSave);
    //Below: deleteCurrent will take the key saved in the array stored in translations and use it to dispatch a delete on that item
    const deleteCurrent = (key) => dispatch(TranslationToDelete(key));

    //alert(JSON.stringify(state.translationToSaveKey.translationToSave));
    useEffect(() => {


    }, []);
  //  Below: if the array of translations saved is empty then we return a message telling them to save something first
    if(translations.length === 0) return (
                                        <SafeAreaView style={styles.containerNothingSaved}>
                                          <Text>Silly rabbit, you have no translations saved.</Text>
                                        </SafeAreaView>
                                      );

//Below: when the array of translations actually have some items it will return this flatlist with all its elements and delete buttons
    return (
        <SafeAreaView style={styles.container}>
            
                    <FlatList 
                        //ref={flatListRef}
                        style={styles.listContainer}
                        data={translations}
                        keyExtractor={(item, index) => item.key.toString()}
                        renderItem={
                            (data) =>
                              <ListItem bottomDivider>
                                <ListItem.Content>
                                  {/* we can use this title to show their first inputed language to translate
                                  <ListItem.Title>{data.item.translation}</ListItem.Title> */}
                                  <Text style={styles.translationTextFrom}>{data.item.languageFrom}</Text>
                                  <Text style={styles.translationTextFrom}>{data.item.textToTranslate}</Text>
                                  <Text style={styles.translationTextTo}>{data.item.languageTo}</Text>
                                  <Text style={styles.translationTextTo}>{data.item.translation}</Text>
                                </ListItem.Content>
                                <Icon name='delete' size={40} onPress={() => deleteCurrent(data.item.key)}/>
                              </ListItem>
                              
                        }
                    />
                
        </SafeAreaView>
    );

};


const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: responsiveHeight(1),

      },
   
    containerNothingSaved: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      //alignItems: 'center',
      //justifyContent: 'center',
      backgroundColor: 'white'
  },
    translationTextFrom: {
        fontSize: responsiveFontSize(3),
        color: 'black',
        
    },
    translationTextTo: {
      fontSize: responsiveFontSize(4),
      color: 'black',
      
  }
    
});


export default  TranslationOuput;