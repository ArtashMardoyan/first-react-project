import React from 'react';

import MyPostsContainer from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = props => {
    const { user } = props.profileReducer;

    return (
        <div>
            <ProfileInfo user={user} />
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
