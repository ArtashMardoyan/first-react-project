import { createStore, combineReducers } from 'redux';

import dialogsReducer from './Dialog/dialogsReducer';
import profileReducer from './Profile/pofileReducer';
import usersReducer from './User/usersReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

const store = createStore(reducers);

export default store;
