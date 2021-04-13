const initialState = {
    textToTranslate: '',
    languageFrom: '',
    languageTo: ''
};

export const textToTranslateReducer = (state = initialState, action) => {

    switch (action.type){
        case 'TEXT_TO_TRANSLATE':
            //alert(JSON.stringify(state));
            return { 
                textToTranslate: action.data,
                languageFrom: action.languageFrom,
                languageTo: action.languageTo 
            };
        default:
            return state;
    }
};