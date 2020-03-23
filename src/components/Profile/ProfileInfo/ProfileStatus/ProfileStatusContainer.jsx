import React from 'react';

import ProfileStatus from './ProfileStatus';

class ProfileStatusContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editMode: false };
    }

    changeEditMode = editMode => {
        this.setState({ editMode });
    };

    render() {
        return <ProfileStatus changeEditMode={this.changeEditMode} {...this.state} {...this.props} />;
    }
}

export default ProfileStatusContainer;
