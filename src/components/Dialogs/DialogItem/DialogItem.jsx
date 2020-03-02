import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './DialogItem.module.css';

const DialogItem = props => {
    const { id, name } = props;

    return (
        <div className={`${styles.dialog}`}>
            <NavLink to={`/dialogs/${id}`} activeClassName={styles.active}>
                {name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
