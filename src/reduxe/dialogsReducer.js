const ACTION_CREATE_MESSAGE = 'ACTION_CREATE_MESSAGE';
const ACTION_UPDATE_NEW_MESSAGE_BODY = 'ACTION_UPDATE_NEW_MESSAGE_BODY';

const initialState = {
    newMessageBody: '',
    dialogs: [
        { id: 1, username: 'Artash Mardoyan' },
        { id: 2, username: 'Gagik Alixanyan' },
        { id: 3, username: 'Artur Asatryan' },
        { id: 4, username: 'Gevorg Gevorgyan' }
    ],
    messages: [
        { id: 1, text: 'Hi :)' },
        { id: 2, text: 'Hi my friend' },
        { id: 3, text: 'How are you???' },
        { id: 4, text: 'Nice thank you.' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
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
export const createMessageActionCreator = () => ({ type: ACTION_CREATE_MESSAGE });
export const updateMessageBodyActionCreator = text => ({ type: ACTION_UPDATE_NEW_MESSAGE_BODY, text });
