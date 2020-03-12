import React from 'react';
import { Route } from 'react-router-dom';

import ProfileContainer from './components/Profile';
import DialogsContainer from './components/Dialogs';
import HeaderContainer from './components/Header';
import UsersContainer from './components/Users';
import Settings from './components/Settings';
import NavBar from './components/NavBar';
import Music from './components/Music';
import News from './components/News';
import './App.css';

const App = props => {
    return (
        <div className="appWrapper">
            <HeaderContainer />
            <NavBar />
            <div className="appWrapperContent">
                <Route path="/profile/:userId?" render={() => <ProfileContainer store={props.store} />} />
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
                <Route path="/news" render={News} />
                <Route path="/music" render={Music} />
                <Route path="/settings" render={Settings} />
                <Route path="/users" render={() => <UsersContainer store={props.store} />} />
            </div>
        </div>
    );
};

export default App;
