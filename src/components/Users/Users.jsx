import React from 'react';
import { Pagination } from 'react-bootstrap';

import User from './User';

const Profile = props => {
    const { users, currentPage, pageCount } = props;

    const items = [];
    for (let number = 1; number <= pageCount; number += 1) {
        items.push(
            <Pagination.Item onClick={() => props.onPageChanged(number)} key={number} active={number === currentPage}>
                {number}
            </Pagination.Item>
        );
    }

    const usersElements = users.map(u => (
        <User
            user={u}
            key={u.id}
            follow={props.follow}
            unFollow={props.unFollow}
            followingProcess={props.followingProcess}
            toggleFollowProgress={props.toggleFollowProgress}
        />
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
};

export default Profile;
