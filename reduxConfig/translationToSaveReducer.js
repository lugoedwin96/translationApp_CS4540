const initialState = {
    translationToSave: []
};

export const translationToSaveReducer = (state = initialState, action) => {
    
    switch (action.type){
        case 'TRANSLATION_TO_SAVE':
            alert(JSON.stringify(action.data));
            return { 
                //...state, translationToSave: action.data
                 ...state, 
                 translationToSave: state.translationToSave.concat({
                    key: Math.random(),
                    translation: action.data
                 })
                //translationToSave: action.data
            };
        case 'TRANSLATION_TO_DELETE':
            return{
                ...state,
                translationToSave: state.translationToSave.filter((item) => item.key !== action.key)
            };
        default:
            return state;
    }
};