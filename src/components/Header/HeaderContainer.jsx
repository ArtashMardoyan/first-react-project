import React from 'react';
import { connect } from 'react-redux';

import * as axios from 'axios';
import { setAuthUserData } from '../../redux/Auth/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        const url = 'http://localhost:3066/v1/users/me';
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYWx0IjoiRWJKcmVwIiwiaWQiOiJjZjVlZjJlNy1iN2RhLTQxZjktYWY1My02ZWJjMTRhNGUwMDIiLCJpYXQiOjE1ODM5MTE4MDh9.m6fuaQos5ui7vTGBvZe-Aat4SqkPAwhxEdXERRsbyKY';

        axios
            .get(url, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
            .then(response => {
                this.props.setUserData(response.data.user);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = state => ({ authReducer: state.authReducer });
const mapDispatchToProps = { setAuthUserData };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
