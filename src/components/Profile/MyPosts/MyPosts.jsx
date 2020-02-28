import React from 'react';

import { updateNewPostTextActionCreator, createPostActionCreator } from '../../../reduxe/state';
import styles from './MyPosts.module.css';
import Post from './Post';

const MyPosts = props => {
    const { posts, newPostText } = props;
    const postsElements = posts.map(o => <Post id={o.id} key={o.id} text={o.text} likesCount={o.likesCount} />);

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(createPostActionCreator());
    };

    const onPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
    };

    return (
        <div className={styles.postWrapper}>
            My Posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} name="newPost" cols="100" rows="10" />
                <button onClick={addPost} type="submit">
                    send
                </button>
            </div>
            <div>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
