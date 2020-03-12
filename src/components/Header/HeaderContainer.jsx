import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import { setAuthUserData } from '../../redux/Auth/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        const headers = {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYWx0IjoiRWJKcmVwIiwiaWQiOiJjZjVlZjJlNy1iN2RhLTQxZjktYWY1My02ZWJjMTRhNGUwMDAiLCJpYXQiOjE1ODQwMDkzNDF9.77CDcr7XFwYdtenGrhtSYU0_UEyCRBx2DO04xFe9NbY`
        };
        axios.get('http://18.194.159.187:8080/v1/users/me/', { headers }).then(response => {
            this.props.setAuthUserData(response.data.user);
        });
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = state => ({ authReducer: state.authReducer });
const mapDispatchToProps = { setAuthUserData };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
