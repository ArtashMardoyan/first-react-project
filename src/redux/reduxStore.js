import { createStore, combineReducers } from 'redux';

import dialogsReducer from './dialogsReducer';
import profileReducer from './pofileReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

const store = createStore(reducers);

export default store;
