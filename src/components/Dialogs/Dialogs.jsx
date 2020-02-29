import React from 'react';

import { createMessageActionCreator, updateMessageBodyActionCreator } from '../../reduxe/dialogsReducer';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = props => {
    const { dialogs, messages, newMessageBody } = props.dialogsPage;
    const dialogsElements = dialogs.map(o => <DialogItem id={o.id} key={o.id} name={o.username} />);
    const messagesElements = messages.map(o => <Message id={o.id} key={o.id} text={o.text} />);

    const addMessage = () => props.dispatch(createMessageActionCreator());
    const onMessageChange = e => props.dispatch(updateMessageBodyActionCreator(e.target.value));

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} value={newMessageBody} placeholder="Enter message" cols="100" rows="5" />
                    <button onClick={addMessage} type="submit">
                        send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
