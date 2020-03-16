import React from 'react';
import { connect } from 'react-redux';

import { getUserAuthData } from '../../redux/reducers/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserAuthData();
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = state => ({ authReducer: state.authReducer });
const mapDispatchToProps = { getUserAuthData };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
