import React from 'react';
import * as axios from 'axios';
import { Pagination } from 'react-bootstrap';

import User from './User';

class Users extends React.Component {
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
        const pageCount = Math.ceil(total / limit);

        const items = [];
        for (let number = 1; number <= pageCount; number += 1) {
            items.push(
                <Pagination.Item onClick={() => this.onPageChanged(number)} key={number} active={number === currentPage}>
                    {number}
                </Pagination.Item>
            );
        }

        const usersElements = users.map(u => (
            <User key={u.id} user={u} follow={this.props.follow} unFollow={this.props.unFollow} />
        ));

        return (
            <div>
                <Pagination>{items}</Pagination>
                <br />
                <div>{usersElements}</div>
                <br />
                <Pagination>{items}</Pagination>
            </div>
        );
    }
}

export default Users;
