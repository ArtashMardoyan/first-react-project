import React from 'react';
import { Col, Image } from 'react-bootstrap';

import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <Image fluid src="https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg" alt="cover" />
            <Col className={styles.avatar} xs={6} md={4}>
                <Image roundedCircle src="https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" alt="avatar" />
            </Col>
        </div>
    );
};

export default ProfileInfo;
