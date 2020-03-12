import React from 'react';
import { connect } from 'react-redux';

import { setAuthUserData } from '../../redux/Auth/authReducer';
import UserHandler from '../../api/UserHandler';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        UserHandler.actionView('me').then(data => this.props.setAuthUserData(data.user));
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = state => ({ authReducer: state.authReducer });
const mapDispatchToProps = { setAuthUserData };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
