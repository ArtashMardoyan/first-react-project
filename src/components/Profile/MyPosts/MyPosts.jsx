import React from 'react';

import styles from './MyPosts.module.css';
import Post from './Post';

const MyPosts = props => {
    const { posts, newPostText } = props;
    const postsElements = posts.map(o => <Post id={o.id} key={o.id} text={o.text} likesCount={o.likesCount} />);

    const newPostElement = React.createRef();

    const addPost = () => {
        const action = { type: 'ACTION_CREATE_POST' };

        props.dispatch(action);
    };

    const onPostChange = () => {
        const action = { type: 'ACTION_UPDATE_NEW_POST_TEXT', text: newPostElement.current.value };

        props.dispatch(action);
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
