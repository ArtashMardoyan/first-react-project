import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../redux/reducers/authReducer';
import Login from './Login';

class LoginContainer extends React.Component {
    onClick = (email, password) => {
        this.props.login(email, password);
    };

    render() {
        return <Login onClick={this.onClick} />;
    }
}

const mapStateToProps = state => ({ authReducer: state.authReducer });
const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
