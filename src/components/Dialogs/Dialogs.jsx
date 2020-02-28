import React from 'react';

import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = props => {
    const {
        dialogsPage: { dialogs, messages },
        dispatch
    } = props;

    const dialogsElements = dialogs.map(o => <DialogItem id={o.id} key={o.id} name={o.username} />);
    const messagesElements = messages.map(o => <Message id={o.id} key={o.id} text={o.text} />);

    const newMessageElement = React.createRef();

    const addMessage = () => {
        dispatch({ type: 'ACTION_CREATE_MESSAGE', text: newMessageElement.current.value });
        newMessageElement.current.value = '';
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement} name="newPost" id="" cols="100" rows="5" />
                    <button onClick={addMessage} type="submit">
                        send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
