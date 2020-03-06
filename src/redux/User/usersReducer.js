const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        // {
        //     id: 1,
        //     status: 'Backend Developer',
        //     followed: true,
        //     username: 'Artash Mardoyan',
        //     logo: 'https://www.meme-arsenal.com/memes/36d6c0bca90dd84a2fa69c54fc954a7b.jpg',
        //     location: { country: 'Armenia', city: 'Erevan' }
        // },
        // {
        //     id: 2,
        //     status: 'IOS Developer',
        //     followed: false,
        //     username: 'Artur Asatryan',
        //     logo: 'https://klike.net/uploads/posts/2018-06/1528377425_11.jpg',
        //     location: { country: 'Armenia', city: 'Erevan' }
        // },
        // {
        //     id: 3,
        //     status: 'Backend Developer',
        //     followed: false,
        //     username: 'Gagik Alixanyan',
        //     logo: 'https://klike.net/uploads/posts/2018-06/1528377344_7.jpg',
        //     location: { country: 'Armenia', city: 'Erevan' }
        // }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { ...state, users: state.users.map(u => (u.id === action.userId ? { ...u, followed: true } : u)) };
        case UN_FOLLOW:
            return { ...state, users: state.users.map(u => (u.id === action.userId ? { ...u, followed: false } : u)) };
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] };
        default:
            return state;
    }
};

export default usersReducer;
export const followAC = userId => ({ type: FOLLOW, userId });
export const unFollowAC = userId => ({ type: UN_FOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
