import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

import defaultAvatar from '../../assets/images/defaultAvatar.png';
import styles from './Header.module.css';

const Header = props => {
    const { isAuth, user } = props.authReducer;

    return (
        <header className={styles.header}>
            <span>
                <Image roundedCircle src="https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-1.png" alt="logo" />
            </span>
            {isAuth ? (
                <span className={styles.authBlock}>
                    <NavLink to="/profile">
                        <Image roundedCircle src={user.avatar || defaultAvatar} className={styles.avatar} alt="avatar" />
                    </NavLink>
                </span>
            ) : (
                <span className={styles.authBlock}>
                    <NavLink to="/login">
                        <Button type="submit" variant="light">
                            Login
                        </Button>
                    </NavLink>
                </span>
            )}
        </header>
    );
};

export default Header;
