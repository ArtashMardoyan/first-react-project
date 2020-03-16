import React from 'react';
import { connect } from 'react-redux';

import { follow, unfollow, getUsers } from '../../redux/reducers/usersReducer';
import Preloader from '../Preloader';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, limit } = this.props.usersReducer;

        this.props.getUsers(currentPage, limit);
    }

    onPageChanged = page => {
        const { limit } = this.props.usersReducer;

        this.props.getUsers(page, limit);
    };

    render() {
        const { users, limit, total, currentPage, isFetching, followingProcess } = this.props.usersReducer;
        const pageCount = Math.ceil(total / limit);

        return (
            <>
                {isFetching ? <Preloader /> : <></>}
                <Users
                    users={users}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    followingProcess={followingProcess}
                />
            </>
        );
    }
}

const mapStateToProps = state => ({ usersReducer: state.usersReducer });
const mapDispatchToProps = { follow, unfollow, getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
