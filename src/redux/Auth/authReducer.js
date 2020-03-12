const TEST = 'TEST';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
    user: {
        id: '',
        email: '',
        avatar: '',
        lastName: '',
        firstName: '',
        isAuth: false,
        isFetching: true
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return { ...state, user: action.user, isAuth: true };
        case TEST:
            return { ...state, user: action.user };
        default:
            return state;
    }
};

export default authReducer;
export const test = userId => ({ type: TEST, userId });
export const setAuthUserData = user => ({ type: SET_AUTH_USER_DATA, user });
