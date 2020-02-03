import React from 'react';

import styles from './Post.module.css';

const Post = props => {
    const {
        text = 'empty',
        likesCount = 0,
        commentsCount = 0,
        img = 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
    } = props;

    return (
        <div className={styles.item}>
            <img src={img} alt="default" />
            <span>{text}</span>
            <div>
                <span>like</span>-{likesCount}
                <span> comment</span>-{commentsCount}
            </div>
        </div>
    );
};

export default Post;
