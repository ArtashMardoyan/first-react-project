import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import store from './reduxe/reduxStore';
import App from './App';

const rerenderEntireTree = state => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
