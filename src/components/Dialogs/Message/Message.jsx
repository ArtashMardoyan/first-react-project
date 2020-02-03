import React from 'react';

import styles from './Message.module.css';

const Message = props => {
    const { text } = props;

    return <div className={styles.message}>{text}</div>;
};

export default Message;
