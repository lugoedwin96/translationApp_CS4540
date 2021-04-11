import {combineReducers} from 'redux';
import { buttonColorReducer} from './buttonColorReducer';
import {textToTranslateReducer} from './textToTranslateReducer';
import {translationToSaveReducer} from './translationToSaveReducer';

export default combineReducers ({
    buttonColorKey: buttonColorReducer,
    textToTranslateKey: textToTranslateReducer,
    translationToSaveKey: translationToSaveReducer,
})