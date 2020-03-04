import { connect } from 'react-redux';

import { createMessageActionCreator, updateMessageBodyActionCreator } from '../../redux/Dialog/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = state => ({ dialogsPage: state.dialogsPage });
const mapDispatchToProps = dispatch => ({
    createMessage: () => dispatch(createMessageActionCreator()),
    updateMessageBody: text => dispatch(updateMessageBodyActionCreator(text))
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
