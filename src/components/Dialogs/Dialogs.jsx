import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = props => {
    const { dialogs, messages, newMessageBody } = props.dialogsReducer;

    if (!props.isAuth) return <Redirect to="/login" />;

    const messagesElements = messages.map(o => <Message id={o.id} key={o.id} text={o.text} />);
    const dialogsElements = dialogs.map(o => <DialogItem id={o.id} key={o.id} name={o.username} />);

    const onSendMessageClick = () => props.createMessage();
    const onMessageChange = e => props.updateMessageBody(e.target.value);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>
                {messagesElements}
                <Form.Group>
                    <Form.Control onChange={onMessageChange} value={newMessageBody} placeholder="Enter message" as="textarea" />
                    <br />
                    <Button onClick={onSendMessageClick} type="submit" variant="primary">
                        Send
                    </Button>
                </Form.Group>
            </div>
        </div>
    );
};

export default Dialogs;
