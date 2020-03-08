import React from 'react';
import { Col, Image } from 'react-bootstrap';

import defaultAvatar from '../../../assets/images/defaultAvatar.png';
import defaultCover from '../../../assets/images/defaultCover.jpg';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Preloader';

const ProfileInfo = props => {
    if (!props.user) {
        return <Preloader />;
    }

    const { avatar, cover, firstName, lastName } = props.user;

    return (
        <div>
            <Col className={styles.cover}>
                <Image fluid src={cover || defaultCover} alt="cover" />
            </Col>
            <Col className={styles.avatar} xs={6} md={4}>
                <Image roundedCircle src={avatar || defaultAvatar} alt="avatar" />
            </Col>
            <div>
                <span>{firstName} </span>
                <span>{lastName}</span>
            </div>
        </div>
    );
};

export default ProfileInfo;
