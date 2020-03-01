import React from 'react';

import { updateNewPostTextActionCreator, createPostActionCreator } from '../../../reduxe/pofileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
    const { profilePage } = props.store.getState();

    const createPost = () => props.store.dispatch(createPostActionCreator());
    const updateNewPostText = text => props.store.dispatch(updateNewPostTextActionCreator(text));

    return <MyPosts createPost={createPost} updateNewPostText={updateNewPostText} profilePage={profilePage} />;
};

export default MyPostsContainer;
