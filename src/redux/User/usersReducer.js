const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const IS_FETCHING = 'IS_FETCHING';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = { users: [], page: 1, total: 0, limit: 10, currentPage: 1, isFetching: true };

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
        case IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        default:
            return state;
    }
};

export default usersReducer;
export const follow = userId => ({ type: FOLLOW, userId });
export const unFollow = userId => ({ type: UN_FOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setTotalCount = total => ({ type: SET_TOTAL_COUNT, total });
export const setIsFetching = isFetching => ({ type: IS_FETCHING, isFetching });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
