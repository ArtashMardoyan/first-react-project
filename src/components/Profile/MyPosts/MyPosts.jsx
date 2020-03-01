import React from 'react';

import styles from './MyPosts.module.css';
import Post from './Post';

const MyPosts = props => {
    const { posts, newPostText } = props.profilePage;
    const postsElements = posts.map(o => <Post id={o.id} key={o.id} text={o.text} likesCount={o.likesCount} />);

    const onCreatePost = () => props.createPost();
    const onPostChange = e => props.updateNewPostText(e.target.value);

    return (
        <div className={styles.postWrapper}>
            My Posts
            <div>
                <textarea onChange={onPostChange} value={newPostText} name="newPost" cols="100" rows="10" />
                <button onClick={onCreatePost} type="submit">
                    send
                </button>
            </div>
            <div>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
