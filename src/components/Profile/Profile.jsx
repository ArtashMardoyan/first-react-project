import React from 'react';

import ProfileInfo from './ProfileInfo';
import MyPosts from './MyPosts';

const Profile = ({ posts }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    );
};

export default Profile;
