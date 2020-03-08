import React from 'react';

import MyPostsContainer from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = props => {
    const { user } = props.profilePage;

    return (
        <div>
            <ProfileInfo user={user} />
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
