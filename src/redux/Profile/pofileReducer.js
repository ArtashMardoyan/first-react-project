const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
const ACTION_SET_USER_PROFILE = 'ACTION_SET_USER_PROFILE';
const ACTION_UPDATE_NEW_POST_TEXT = 'ACTION_UPDATE_NEW_POST_TEXT';

const initialState = {
    newPostText: '',
    user: null,
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
            return { ...state, newPostText: '', posts: [...state.posts, { id: 5, text: state.newPostText, likesCount: 0 }] };
        case ACTION_SET_USER_PROFILE:
            return { ...state, user: action.user };
        case ACTION_UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.text };
        default:
            return state;
    }
};

export default profileReducer;
export const createPost = () => ({ type: ACTION_CREATE_POST });
export const setUserProfile = user => ({ type: ACTION_SET_USER_PROFILE, user });
export const updateNewPostText = text => ({ type: ACTION_UPDATE_NEW_POST_TEXT, text });
