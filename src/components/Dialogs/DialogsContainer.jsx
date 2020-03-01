import React from 'react';

import { createMessageActionCreator, updateMessageBodyActionCreator } from '../../reduxe/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
    const { dialogsPage } = props.store.getState();

    const createMessage = () => props.store.dispatch(createMessageActionCreator());
    const updateMessageBody = text => props.store.dispatch(updateMessageBodyActionCreator(text));

    return <Dialogs createMessage={createMessage} updateMessageBody={updateMessageBody} dialogsPage={dialogsPage} />;
};

export default DialogsContainer;
