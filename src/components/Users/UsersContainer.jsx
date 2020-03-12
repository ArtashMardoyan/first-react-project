import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import { follow, unFollow, setUsers, setIsFetching, setTotalCount, setCurrentPage } from '../../redux/User/usersReducer';
import Preloader from '../Preloader';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        const headers = {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYWx0IjoiRWJKcmVwIiwiaWQiOiJjZjVlZjJlNy1iN2RhLTQxZjktYWY1My02ZWJjMTRhNGUwMDAiLCJpYXQiOjE1ODQwMDkzNDF9.77CDcr7XFwYdtenGrhtSYU0_UEyCRBx2DO04xFe9NbY`
        };

        const { currentPage, limit } = this.props.usersReducer;

        this.props.setIsFetching(true);

        axios.get(`http://18.194.159.187:8080/v1/users?page=${currentPage}&limit=${limit}`, { headers }).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.users);
            this.props.setTotalCount(response.data._meta.total);
        });
    }

    onPageChanged = page => {
        const headers = {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYWx0IjoiRWJKcmVwIiwiaWQiOiJjZjVlZjJlNy1iN2RhLTQxZjktYWY1My02ZWJjMTRhNGUwMDAiLCJpYXQiOjE1ODQwMDkzNDF9.77CDcr7XFwYdtenGrhtSYU0_UEyCRBx2DO04xFe9NbY`
        };

        const { limit } = this.props.usersReducer;

        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);

        axios.get(`http://18.194.159.187:8080/v1/users?page=${page}&limit=${limit}`, { headers }).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.users);
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
