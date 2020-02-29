import React from 'react';

import { updateNewPostTextActionCreator, createPostActionCreator } from '../../../reduxe/pofileReducer';
import styles from './MyPosts.module.css';
import Post from './Post';

const MyPosts = props => {
    const { posts, newPostText } = props;
    const postsElements = posts.map(o => <Post id={o.id} key={o.id} text={o.text} likesCount={o.likesCount} />);

    const addPost = () => props.dispatch(createPostActionCreator());
    const onPostChange = e => props.dispatch(updateNewPostTextActionCreator(e.target.value));

    return (
        <div className={styles.postWrapper}>
            My Posts
            <div>
                <textarea onChange={onPostChange} value={newPostText} name="newPost" cols="100" rows="10" />
                <button onClick={addPost} type="submit">
                    send
                </button>
            </div>
            <div>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
