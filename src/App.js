import React from 'react';
import { Route } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Music from './components/Music';
import News from './components/News';
import './App.css';

const App = props => {
    return (
        <div className="appWrapper">
            <Header />
            <NavBar />
            <div className="appWrapperContent">
                <Route path="/profile" render={() => <Profile store={props.store} />} />
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
};

export default App;
