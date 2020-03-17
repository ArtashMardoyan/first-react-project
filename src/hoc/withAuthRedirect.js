import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({ isAuth: state.authReducer.isAuth });
const mapDispatchToProps = {};

export default Component => {
    const RedirectComponent = props => {
        return props.isAuth ? <Component {...props} /> : <Redirect to="/login" />;
    };

    return connect(mapStateToProps, mapDispatchToProps)(RedirectComponent);
};
