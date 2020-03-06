import React from 'react';
import * as axios from 'axios';

import User from './User';

class Users extends React.Component {
    getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get('http://18.194.159.187:8080/v1/users').then(response => {
                this.props.setUsers(response.data.users);
            });
        }
    };

    render() {
        const { users } = this.props.usersPage;

        const usersElements = users.map(u => (
            <User key={u.id} user={u} follow={this.props.follow} unFollow={this.props.unFollow} />
        ));

        return (
            <div>
                <button onClick={this.getUsers} type="submit">
                    Get users
                </button>
                <div>{usersElements}</div>
            </div>
        );
    }
}

export default Users;
