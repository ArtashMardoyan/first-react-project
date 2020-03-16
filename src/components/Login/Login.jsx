import React from 'react';
import { Form, Button } from 'react-bootstrap';

import styles from './Login.module.css';

const Login = props => {
    return (
        <Form className={styles.loginBlock}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className={styles.input} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className={styles.input} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
                onClick={e => {
                    debugger;
                    props.onClick(e.email, e.password);
                }}
                variant="primary"
                type="submit"
            >
                Submit
            </Button>
        </Form>
    );
};

export default Login;
