import React from 'react';
import { Button } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = props => {
    const { isAuth } = props.authReducer.user;
    console.log(isAuth);

    return (
        <header className={styles.header}>
            <img src="https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-1.png" alt="" />
            {isAuth ? (
                <div>avatar</div>
            ) : (
                <div className={styles.loginBlock}>
                    <NavLink to="/login">
                        <Button type="submit" variant="light">
                            Login
                        </Button>
                    </NavLink>
                </div>
            )}
        </header>
    );
};

export default Header;
