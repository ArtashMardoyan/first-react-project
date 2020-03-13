import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';

import defaultAvatar from '../../../assets/images/defaultAvatar.png';
import FollowHandler from '../../../api/FollowHandler';
import styles from './User.module.css';

const User = props => {
    const { id, avatar, firstName, lastName, friendsCount, followType } = props.user;
    const { followingProcess } = props;

    const onClickUnFollow = () => {
        props.toggleFollowProgress(true, id);

        FollowHandler.actionCreate(id).then(data => {
            if (data.statusCode === 202) {
                props.follow(id);
            }

            props.toggleFollowProgress(false, id);
        });
    };

    const onClickFollow = () => {
        props.toggleFollowProgress(true, id);

        FollowHandler.actionDelete(id).then(data => {
            if (data.statusCode === 202) {
                props.unFollow(id);
            }

            props.toggleFollowProgress(false, id);
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
                            <Button
                                type="submit"
                                variant="light"
                                onClick={onClickFollow}
                                disabled={followingProcess.some(i => i === id)}
                            >
                                un follow
                            </Button>
                        ) : followType === 'notFollowed' ? (
                            <Button
                                type="submit"
                                variant="primary"
                                onClick={onClickUnFollow}
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
