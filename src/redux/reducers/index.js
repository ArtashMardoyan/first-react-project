import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

const reducers = combineReducers({ profileReducer, dialogsReducer, usersReducer, authReducer });

export default reducers;
