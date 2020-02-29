const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
const ACTION_UPDATE_NEW_POST_TEXT = 'ACTION_UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ACTION_CREATE_POST:
            state.posts.push({ id: 5, text: state.newPostText, likesCount: 0 });
            state.newPostText = '';
            return state;
        case ACTION_UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
};

export default profileReducer;
export const createPostActionCreator = () => ({ type: ACTION_CREATE_POST });
export const updateNewPostTextActionCreator = text => ({ type: ACTION_UPDATE_NEW_POST_TEXT, text });
