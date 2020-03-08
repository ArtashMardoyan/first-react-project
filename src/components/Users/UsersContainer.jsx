import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../redux/User/usersReducer';
import Users from './Users';

const mapStateToProps = state => ({ usersPage: state.usersPage });
const mapDispatchToProps = dispatch => ({
    follow: userId => dispatch(followAC(userId)),
    unFollow: userId => dispatch(unFollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
    setTotalCount: total => dispatch(setTotalCountAC(total))
});

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, limit } = this.props.usersPage;

        axios.get(`http://18.194.159.187:8080/v1/users?page=${currentPage}&limit=${limit}`).then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalCount(response.data._meta.total);
        });
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page);

        const { limit } = this.props.usersPage;

        axios.get(`http://18.194.159.187:8080/v1/users?page=${page}&limit=${limit}`).then(response => {
            this.props.setUsers(response.data.users);
        });
    };

    render() {
        const { users, limit, total, currentPage } = this.props.usersPage;
        const { follow, unfollow } = this.props;

        const pageCount = Math.ceil(total / limit);

        return (
            <Users
                users={users}
                follow={follow}
                unfollow={unfollow}
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChanged={this.onPageChanged}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
