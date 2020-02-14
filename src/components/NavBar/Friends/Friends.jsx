import React from 'react';

import styles from './Friends.module.css';

const Friends = () => {
    return (
        <div>
            <h2>Friends</h2>
            <div className={styles.friendsWrapper}>
                <div>Gago</div>
                <div>Artur</div>
                <div>Gevor</div>
            </div>
        </div>
    );
};

export default Friends;
