const initialState = {
    textButtonColor: 'white',
    voiceButtonColor: '#4a69bd',
    textOrVoice: 'text'
};

export const buttonColorReducer = (state = initialState, action) => {

    switch (action.type){
        case 'CHANGE_TEXT_BUTTON_COLOR':
                return {textButtonColor: 'white', voiceButtonColor: '#4a69bd', textOrVoice: 'text' };
        case 'CHANGE_VOICE_BUTTON_COLOR':
            return {textButtonColor: '#4a69bd', voiceButtonColor: 'white', textOrVoice: 'voice'};
        default:
            return state;
    }
};