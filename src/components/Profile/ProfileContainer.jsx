import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserProfile } from '../../redux/reducers/profileReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { userId } = this.props.match.params;
        const id = userId || 'cf5ef2e7-b7da-41f9-af53-6ebc14a4e000';

        this.props.getUserProfile(id);
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = state => ({ profileReducer: state.profileReducer });
const mapDispatchToProps = { getUserProfile };

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileContainer);
