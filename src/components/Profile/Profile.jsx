import React from 'react';

import ProfileInfo from './ProfileInfo';
import MyPosts from './MyPosts';

const Profile = props => {
    const {
        profilePage: { posts, newPostText },
        actionCreatePost,
        actionChangeNewPostText
    } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={posts}
                newPostText={newPostText}
                actionCreatePost={actionCreatePost}
                actionChangeNewPostText={actionChangeNewPostText}
            />
        </div>
    );
};

export default Profile;
