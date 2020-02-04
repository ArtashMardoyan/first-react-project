import React from 'react';

import ProfileInfo from './ProfileInfo';
import MyPosts from './MyPosts';

const Profile = props => {
    return (
        <div>
            <ProfileInfo />
            {/* eslint-disable-next-line react/destructuring-assignment */}
            <MyPosts posts={props.state.posts} />
        </div>
    );
};

export default Profile;
