import { compose } from 'redux';
import { connect } from 'react-redux';

import { createMessage, updateMessageBody } from '../../redux/reducers/dialogsReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = state => ({ dialogsReducer: state.dialogsReducer });
const mapDispatchToProps = { createMessage, updateMessageBody };

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
