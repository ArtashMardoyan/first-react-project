import UserHandler from '../../api/UserHandler';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

const initialState = {
    user: {
        id: '',
        email: '',
        avatar: '',
        lastName: '',
        firstName: ''
    },
    isAuth: false,
    isFetching: true,
    token: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return { ...state, user: action.user, isAuth: true };
        case SET_AUTH_TOKEN:
            return { ...state, user: action.user, token: `Bearer ${action.token}` };
        default:
            return state;
    }
};

export default authReducer;
export const setAuthUserData = user => ({ type: SET_AUTH_USER_DATA, user });
export const setAuthToken = (user, token) => ({ type: SET_AUTH_TOKEN, user, token });

export const getUserAuthData = () => dispatch => {
    UserHandler.actionView().then(data => dispatch(setAuthUserData(data.user)));
};

export const login = (email, password) => dispatch => {
    UserHandler.actionLogin(email, password).then(data => dispatch(setAuthToken(data.user, data.token)));
};
