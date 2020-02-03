import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

const posts = [
    { id: 1, text: 'Animi omnis accusamus ipsam quia odio et nihil cumque.', likesCount: 10 },
    { id: 2, text: 'Veritatis quia aut eaque ullam.', likesCount: 5 },
    { id: 3, text: 'Quos laborum ut consequuntur voluptas aut cum consectetur eius doloribus.', likesCount: 2 },
    { id: 4, text: 'Quis quia fugit vitae sit.', likesCount: 13 },
    { id: 5, text: 'Recusandae ea magnam ea deleniti.', likesCount: 25 }
];
const dialogs = [
    { id: 1, username: 'Artash Mardoyan' },
    { id: 2, username: 'Gagik Alixanyan' },
    { id: 3, username: 'Artur Asatryan' },
    { id: 4, username: 'Gevorg Gevorgyan' }
];
const messages = [
    { id: 1, text: 'Hi :)' },
    { id: 2, text: 'Hi my friend' },
    { id: 3, text: 'How are you???' },
    { id: 4, text: 'Nice thank you.' }
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
