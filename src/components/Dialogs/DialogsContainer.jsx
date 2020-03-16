import { connect } from 'react-redux';

import { createMessage, updateMessageBody } from '../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = state => ({ dialogsReducer: state.dialogsReducer, isAuth: state.authReducer.isAuth });
const mapDispatchToProps = { createMessage, updateMessageBody };

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
