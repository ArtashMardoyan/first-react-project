import React from 'react';

import User from './User';

const Users = props => {
    const { users } = props.usersPage;

    const usersElements = users.map(u => <User key={u.id} user={u} follow={props.follow} unFollow={props.unFollow} />);

    return <div>{usersElements}</div>;
};

export default Users;
