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
export const TextToTranslate = (textToTranslate) => {
    return{
        type: 'TEXT_TO_TRANSLATE',
        data: textToTranslate,
    };

};
export const TranslationToSave = (translationToSave) => {
    return {
        type: 'TRANSLATION_TO_SAVE',
        data: translationToSave,
    };
};
export const TranslationToDelete = (key) => {
    return {
        type: 'TRANSLATION_TO_DELETE',
        key: key
    };
};