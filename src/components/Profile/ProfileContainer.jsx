import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setUserProfile } from '../../redux/Profile/profileReducer';
import UserHandler from '../../api/UserHandler';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { userId } = this.props.match.params;
        const id = userId || 'cf5ef2e7-b7da-41f9-af53-6ebc14a4e000';

        UserHandler.actionView(id).then(data => this.props.setUserProfile(data.user));
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = state => ({ profileReducer: state.profileReducer });
const mapDispatchToProps = { setUserProfile };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
