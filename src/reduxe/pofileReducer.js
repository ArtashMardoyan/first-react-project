const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
const ACTION_UPDATE_NEW_POST_TEXT = 'ACTION_UPDATE_NEW_POST_TEXT';

const initialState = {
    newPostText: '',
    posts: [
        { id: 1, text: 'Animi omnis accusamus ipsam quia odio et nihil cumque.', likesCount: 10 },
        { id: 2, text: 'Veritatis quia aut eaque ullam.', likesCount: 5 },
        { id: 3, text: 'Quos laborum ut consequuntur voluptas aut cum consectetur eius doloribus.', likesCount: 2 },
        { id: 4, text: 'Quis quia fugit vitae sit.', likesCount: 13 },
        { id: 5, text: 'Recusandae ea magnam ea deleniti.', likesCount: 25 }
    ]
};

const profileReducer = (state = initialState, action) => {
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
