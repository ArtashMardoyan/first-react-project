import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';

import styles from './User.module.css';

const User = props => {
    const { id, logo, followed, username, status, location } = props.user;

    const onClickUnFollow = () => props.unFollow(id);
    const onClickFollow = () => props.follow(id);

    return (
        <div key={id}>
            <Row className={styles.user}>
                <Col md={2}>
                    <div className={styles.avatarWrapper}>
                        <Image roundedCircle src={logo} className={styles.avatar} alt="avatar" />
                    </div>
                    <div className={styles.followButtonWrapper}>
                        {followed ? (
                            <Button onClick={onClickUnFollow} type="submit" variant="light">
                                un follow
                            </Button>
                        ) : (
                            <Button onClick={onClickFollow} type="submit" variant="primary">
                                follow
                            </Button>
                        )}
                    </div>
                </Col>
                <Col md={6}>
                    <Row className={styles.userInfo}>
                        <Col md={6}>
                            <div>{username}</div>
                            <div>{status}</div>
                        </Col>
                        <Col md={6} className={styles.location}>
                            <div>{location.city}</div>
                            <div>{location.country}</div>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </div>
    );
};

export default User;
