import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import styles from './ProfileStatus.module.css';

const ProfileStatus = props => {
    const { editMode } = props;

    const activateEditMode = () => props.changeEditMode(true);
    const deActivateEditMode = () => props.changeEditMode(false);

    return (
        <div className={styles.status}>
            {editMode ? (
                <InputGroup className="mb-3">
                    <FormControl onBlur={deActivateEditMode} value={props.status} autoFocus />
                    <InputGroup.Append>
                        <Button onClick={deActivateEditMode} variant="outline-secondary">
                            Button
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            ) : (
                <div>
                    <span onClick={activateEditMode}>{props.status}</span>
                </div>
            )}
        </div>
    );
};

export default ProfileStatus;
