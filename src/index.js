import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import state, { actionChangeNewPostText, actionCreateMessage, actionCreatePost, subscribe } from './reduxe/state';
import * as serviceWorker from './serviceWorker';
import App from './App';

const rerenderEntireTree = todoState => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={todoState}
                actionCreatePost={actionCreatePost}
                actionCreateMessage={actionCreateMessage}
                actionChangeNewPostText={actionChangeNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
