const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

const initialState = {
    users: [],
    page: 1,
    total: 0,
    limit: 10,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { ...state, users: state.users.map(u => (u.id === action.userId ? { ...u, followType: 'followed' } : u)) };
        case UN_FOLLOW:
            return { ...state, users: state.users.map(u => (u.id === action.userId ? { ...u, followType: 'notFollowed' } : u)) };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_COUNT:
            return { ...state, total: action.total };
        default:
            return state;
    }
};

export default usersReducer;
export const followAC = userId => ({ type: FOLLOW, userId });
export const unFollowAC = userId => ({ type: UN_FOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCountAC = total => ({ type: SET_TOTAL_COUNT, total });