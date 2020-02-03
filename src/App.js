import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Settings from './components/Settings';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Music from './components/Music';
import News from './components/News';
import './App.css';

const App = ({ posts, dialogs, messages }) => {
    return (
        <Router>
            <div className="appWrapper">
                <Header />
                <NavBar />
                <div className="appWrapperContent">
                    <Route path="/profile">
                        <Profile posts={posts} />
                    </Route>
                    <Route path="/dialogs">
                        <Dialogs dialogs={dialogs} messages={messages} />
                    </Route>
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </Router>
    );
};

export default App;
