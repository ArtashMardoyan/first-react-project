import React from 'react';

import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.cover}>
                <img src="https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg" alt="cover" />
            </div>
            <div className={styles.avatar}>
                <img src="https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" alt="avatar" />
            </div>
        </div>
    );
};

export default ProfileInfo;
