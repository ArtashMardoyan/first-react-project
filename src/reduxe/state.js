const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
const ACTION_CREATE_MESSAGE = 'ACTION_CREATE_MESSAGE';
const ACTION_UPDATE_NEW_POST_TEXT = 'ACTION_UPDATE_NEW_POST_TEXT';

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: 'Animi omnis accusamus ipsam quia odio et nihil cumque.', likesCount: 10 },
                { id: 2, text: 'Veritatis quia aut eaque ullam.', likesCount: 5 },
                { id: 3, text: 'Quos laborum ut consequuntur voluptas aut cum consectetur eius doloribus.', likesCount: 2 },
                { id: 4, text: 'Quis quia fugit vitae sit.', likesCount: 13 },
                { id: 5, text: 'Recusandae ea magnam ea deleniti.', likesCount: 25 }
            ],
            newPostText: 'IT-KAMASUTRA.com'
        },
        dialogsPage: {
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
    // PRIVATE METHODS
    _callSubscriber() {
        console.log('ok');
    },
    _actionCreatePost() {
        const newPost = { id: 5, text: this._state.profilePage.newPostText, likesCount: 0 };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';

        this._callSubscriber(this._state);
    },
    _actionUpdateNewPostText(action) {
        this._state.profilePage.newPostText = action.text;

        this._callSubscriber(this._state);
    },
    _actionCreateMessage(action) {
        const newPost = { id: 5, text: action.text };

        this._state.dialogsPage.messages.push(newPost);

        this._callSubscriber(this._state);
    },
    // PUBLIC METHODS
    dispatch(action) {
        if (action.type === ACTION_CREATE_POST) {
            this._actionCreatePost(action);
        } else if (action.type === ACTION_UPDATE_NEW_POST_TEXT) {
            this._actionUpdateNewPostText(action);
        } else if (action.type === ACTION_CREATE_MESSAGE) {
            this._actionCreateMessage(action);
        }
    }
};

export default store;
window.store = store;

export const createPostActionCreator = () => ({ type: ACTION_CREATE_POST });
export const updateNewPostTextActionCreator = text => ({ type: ACTION_UPDATE_NEW_POST_TEXT, text });
