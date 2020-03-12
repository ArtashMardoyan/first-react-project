import React from 'react';
import { connect } from 'react-redux';

import { follow, unFollow, setUsers, setIsFetching, setTotalCount, setCurrentPage } from '../../redux/User/usersReducer';
import UserHandler from '../../api/UserHandler';
import Preloader from '../Preloader';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, limit } = this.props.usersReducer;

        this.props.setIsFetching(true);

        UserHandler.actionIndex(currentPage, limit).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.users);
            this.props.setTotalCount(data._meta.total);
        });
    }

    onPageChanged = page => {
        const { limit } = this.props.usersReducer;

        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);

        UserHandler.actionIndex(page, limit).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.users);
            this.props.setTotalCount(data._meta.total);
        });
    };

    render() {
        const { users, limit, total, currentPage, isFetching } = this.props.usersReducer;
        const pageCount = Math.ceil(total / limit);

        return (
            <>
                {isFetching ? <Preloader /> : <></>}
                <Users
                    users={users}
                    pageCount={pageCount}
                    currentPage={currentPage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onPageChanged={this.onPageChanged}
                />
            </>
        );
    }
}

const mapStateToProps = state => ({ usersReducer: state.usersReducer });
const mapDispatchToProps = { follow, unFollow, setUsers, setTotalCount, setIsFetching, setCurrentPage };

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
