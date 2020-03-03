import React from 'react';
import { Button, Form } from 'react-bootstrap';

import styles from './MyPosts.module.css';
import Post from './Post';

const MyPosts = props => {
    const { posts, newPostText } = props.profilePage;
    const postsElements = posts.map(o => <Post id={o.id} key={o.id} text={o.text} likesCount={o.likesCount} />);

    const onCreatePost = () => props.createPost();
    const onPostChange = e => props.updateNewPostText(e.target.value);

    return (
        <div className={styles.postWrapper}>
            <Form.Group>
                <Form.Label>My Posts</Form.Label>
                <Form.Control onChange={onPostChange} value={newPostText} placeholder="Create Post" as="textarea" />
                <br />
                <Button onClick={onCreatePost} type="submit" variant="primary">
                    Send
                </Button>
            </Form.Group>
            <div>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
