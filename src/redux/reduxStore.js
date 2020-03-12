import { createStore, combineReducers } from 'redux';

import profileReducer from './Profile/profileReducer';
import dialogsReducer from './Dialog/dialogsReducer';
import usersReducer from './User/usersReducer';
import authReducer from './Auth/authReducer';

const reducers = combineReducers({ profileReducer, dialogsReducer, usersReducer, authReducer });

const store = createStore(reducers);

export default store;
