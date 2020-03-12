import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';

import * as axios from 'axios';
import defaultAvatar from '../../../assets/images/defaultAvatar.png';
import styles from './User.module.css';

const User = props => {
    const { id, avatar, firstName, lastName, friendsCount, followType } = props.user;

    const onClickUnFollow = () => {
        const headers = {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYWx0IjoiRWJKcmVwIiwiaWQiOiJjZjVlZjJlNy1iN2RhLTQxZjktYWY1My02ZWJjMTRhNGUwMDAiLCJpYXQiOjE1ODQwMDkzNDF9.77CDcr7XFwYdtenGrhtSYU0_UEyCRBx2DO04xFe9NbY`
        };

        axios.post(`http://18.194.159.187:8080/v1/users/${id}/follow`, {}, { headers }).then(response => {
            if (response.status === 202) {
                props.follow(id);
            }
        });
    };

    const onClickFollow = () => {
        const headers = {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYWx0IjoiRWJKcmVwIiwiaWQiOiJjZjVlZjJlNy1iN2RhLTQxZjktYWY1My02ZWJjMTRhNGUwMDAiLCJpYXQiOjE1ODQwMDkzNDF9.77CDcr7XFwYdtenGrhtSYU0_UEyCRBx2DO04xFe9NbY`
        };

        axios.delete(`http://18.194.159.187:8080/v1/users/${id}/following`, { headers }).then(response => {
            if (response.status === 202) {
                props.unFollow(id);
            }
        });
    };

    return (
        <div key={id}>
            <Row className={styles.user}>
                <Col md={2}>
                    <NavLink to={`/profile/${id}`}>
                        <div className={styles.avatarWrapper}>
                            <Image roundedCircle src={avatar || defaultAvatar} className={styles.avatar} alt="avatar" />
                        </div>
                    </NavLink>
                    <div className={styles.followButtonWrapper}>
                        {followType === 'followed' ? (
                            <Button onClick={onClickFollow} type="submit" variant="light">
                                un follow
                            </Button>
                        ) : (
                            <Button onClick={onClickUnFollow} type="submit" variant="primary">
                                follow
                            </Button>
                        )}
                    </div>
                </Col>
                <Col md={6}>
                    <Row className={styles.userInfo}>
                        <Col md={6}>
                            <div>
                                {firstName} {lastName}
                            </div>
                            <div>Friends {friendsCount}</div>
                        </Col>
                        <Col md={6} className={styles.location}>
                            <div>location.city</div>
                            <div>location.country</div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </div>
    );
};

export default User;
