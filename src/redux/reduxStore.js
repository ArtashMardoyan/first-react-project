import { createStore, combineReducers } from 'redux';

import dialogsPage from './Dialog/dialogsReducer';
import profilePage from './Profile/pofileReducer';
import usersPage from './User/usersReducer';

const reducers = combineReducers({ profilePage, dialogsPage, usersPage });

const store = createStore(reducers);

export default store;
