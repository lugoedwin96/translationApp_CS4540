export const ChangeTextButtonColor = () => {
    return {
        type: 'CHANGE_TEXT_BUTTON_COLOR',
    };
};
export const ChangeVoiceButtonColor = () => {
    return {
        type: 'CHANGE_VOICE_BUTTON_COLOR',
    };
};
export const TextToTranslate = (textToTranslate, languageFrom, languageTo) => {
    return{
        type: 'TEXT_TO_TRANSLATE',
        data: textToTranslate,
        languageFrom: languageFrom,
        languageTo: languageTo
    };

};
export const TranslationToSave = (translationToSave, languageFrom, languageTo, textToTranslate) => {
    return {
        type: 'TRANSLATION_TO_SAVE',
        data: translationToSave,
        languageFrom: languageFrom,
        languageTo: languageTo,
        textToTranslate: textToTranslate
    };
};
export const TranslationToDelete = (key) => {
    return {
        type: 'TRANSLATION_TO_DELETE',
        key: key
    };
};
