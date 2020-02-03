import React from 'react';

import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = ({ dialogs, messages }) => {
    // eslint-disable-next-line react/jsx-key
    const dialogsElements = dialogs.map(o => <DialogItem id={o.id} name={o.username} />);
    // eslint-disable-next-line react/jsx-key
    const messagesElements = messages.map(o => <Message id={o.id} text={o.text} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>{messagesElements}</div>
        </div>
    );
};

export default Dialogs;
