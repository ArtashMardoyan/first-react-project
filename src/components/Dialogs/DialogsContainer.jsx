import { connect } from 'react-redux';

import { createMessage, updateMessageBody } from '../../redux/Dialog/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = state => ({ dialogsReducer: state.dialogsReducer });
const mapDispatchToProps = { createMessage, updateMessageBody };

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
