import React from 'react';
import { Col, Image } from 'react-bootstrap';

import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <Col>
                <Image
                    fluid
                    src="https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg"
                    alt="cover"
                />
            </Col>
            <Col className={styles.avatar} xs={6} md={4}>
                <Image
                    roundedCircle
                    src="https://s3.amazonaws.com/sabx-backend-dev/seeds/users/gallery/avatars/19.jpeg"
                    alt="avatar"
                />
            </Col>
        </div>
    );
};

export default ProfileInfo;
