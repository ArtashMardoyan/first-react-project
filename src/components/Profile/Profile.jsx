import React from 'react';

import ProfileInfo from './ProfileInfo';
import MyPosts from './MyPosts';

const Profile = props => {
    const {
        profilePage: { posts, newPostText },
        dispatch
    } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch} />
        </div>
    );
};

export default Profile;
