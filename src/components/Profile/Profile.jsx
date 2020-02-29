import React from 'react';

import ProfileInfo from './ProfileInfo';
import MyPosts from './MyPosts';

const Profile = props => {
    const { posts, newPostText } = props.profilePage;

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} newPostText={newPostText} dispatch={props.dispatch} />
        </div>
    );
};

export default Profile;
