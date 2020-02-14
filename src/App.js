import React from 'react';
import { Route } from 'react-router-dom';

import Settings from './components/Settings';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Music from './components/Music';
import News from './components/News';
import './App.css';

const App = props => {
    const {
        state: { profilePage, dialogsPage },
        actionCreatePost,
        actionCreateMessage,
        actionChangeNewPostText
    } = props;

    return (
        <div className="appWrapper">
            <Header />
            <NavBar />
            <div className="appWrapperContent">
                <Route
                    path="/profile"
                    render={() => (
                        <Profile
                            profilePage={profilePage}
                            actionCreatePost={actionCreatePost}
                            actionChangeNewPostText={actionChangeNewPostText}
                        />
                    )}
                />
                <Route
                    path="/dialogs"
                    render={() => <Dialogs dialogsPage={dialogsPage} actionCreateMessage={actionCreateMessage} />}
                />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
    );
};

export default App;
