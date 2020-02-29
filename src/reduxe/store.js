import dialogsReducer from './dialogsReducer';
import profileReducer from './pofileReducer';

const store = {
    _state: {
        profilePage: {
            newPostText: 'it.com',
            posts: [
                { id: 1, text: 'Animi omnis accusamus ipsam quia odio et nihil cumque.', likesCount: 10 },
                { id: 2, text: 'Veritatis quia aut eaque ullam.', likesCount: 5 },
                { id: 3, text: 'Quos laborum ut consequuntur voluptas aut cum consectetur eius doloribus.', likesCount: 2 },
                { id: 4, text: 'Quis quia fugit vitae sit.', likesCount: 13 },
                { id: 5, text: 'Recusandae ea magnam ea deleniti.', likesCount: 25 }
            ]
        },
        dialogsPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {},
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
