import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setUserProfile } from '../../redux/Profile/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { userId } = this.props.match.params;
        const id = userId || 'cf5ef2e7-b7da-41f9-af53-6ebc14a4e002';

        axios.get(`http://18.194.159.187:8080/v1/users/${id}`).then(response => {
            this.props.setUserProfile(response.data.user);
        });
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = state => ({ profileReducer: state.profileReducer });
const mapDispatchToProps = { setUserProfile };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
