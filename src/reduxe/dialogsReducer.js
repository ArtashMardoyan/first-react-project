const ACTION_CREATE_MESSAGE = 'ACTION_CREATE_MESSAGE';
const ACTION_UPDATE_NEW_MESSAGE_BODY = 'ACTION_UPDATE_NEW_MESSAGE_BODY';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ACTION_CREATE_MESSAGE:
            state.messages.push({ id: 5, text: state.newMessageBody });
            state.newMessageBody = '';
            return state;
        case ACTION_UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text;
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;
export const createMessageActionCreator = text => ({ type: ACTION_CREATE_MESSAGE, text });
export const updateMessageBodyActionCreator = text => ({ type: ACTION_UPDATE_NEW_MESSAGE_BODY, text });
