import { createStore, combineReducers } from 'redux';
import profileReducer from './pofileReducer';
import dialogsReducer from './dialogsReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

const store = createStore(reducers);

export default store;
