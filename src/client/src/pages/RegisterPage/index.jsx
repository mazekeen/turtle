import React from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import './style.scss';

function RegisterPage() {
    return (
        <Container>
            <Row style={{ marginTop: 200 }}>
                <Col lg={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group className="register-name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='name' placeholder='Enter Name' />
                        </Form.Group>

                        <Form.Group className="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                        </Form.Group>

                        <Form.Group className="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' />
                        </Form.Group>

                        <Button className="register-btn" variant='outline-primary'>Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterPage;
