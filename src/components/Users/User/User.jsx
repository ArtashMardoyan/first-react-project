import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';

import defaultAvatar from '../../../assets/images/defaultAvatar.png';
import styles from './User.module.css';

const User = props => {
    const { id, avatar, firstName, lastName, friendsCount, followType } = props.user;
    const { followingProcess } = props;

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
                            <Button
                                type="submit"
                                variant="light"
                                onClick={() => props.unfollow(id)}
                                disabled={followingProcess.some(i => i === id)}
                            >
                                un follow
                            </Button>
                        ) : followType === 'notFollowed' ? (
                            <Button
                                type="submit"
                                variant="primary"
                                onClick={() => props.follow(id)}
                                disabled={followingProcess.some(i => i === id)}
                            >
                                follow
                            </Button>
                        ) : (
                            <></>
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
