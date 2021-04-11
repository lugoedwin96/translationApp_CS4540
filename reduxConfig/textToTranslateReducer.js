const initialState = {
    textToTranslate: ''
};

export const textToTranslateReducer = (state = initialState, action) => {

    switch (action.type){
        case 'TEXT_TO_TRANSLATE':
            return { textToTranslate: action.data};
        default:
            return state;
    }
};