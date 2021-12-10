import React from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import './style.scss';

function LoginPage() {
    return (
        <Container>
            <Row style={{
                marginTop: 200,
            }}>
                <Col lg={{
                    span: 6,
                    offset: 3,
                }}>
                    <Form>
                        <Form.Group>
                            <Form.Label className="email">Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="password">Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password' />
                        </Form.Group>

                        <Button className="login-btn" variant='outline-primary'>Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
