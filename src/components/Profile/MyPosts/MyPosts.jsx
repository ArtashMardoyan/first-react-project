import React from 'react';

import styles from './MyPosts.module.css';
import Post from './Post';

const MyPosts = ({ posts }) => {
    // eslint-disable-next-line react/jsx-key
    const postsElements = posts.map(o => <Post id={o.id} text={o.text} likesCount={o.likesCount} />);

    return (
        <div className={styles.postWrapper}>
            My Posts
            <div>
                <textarea name="newPost" id="" cols="100" rows="10" />
                <button type="submit">send</button>
            </div>
            <div>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
