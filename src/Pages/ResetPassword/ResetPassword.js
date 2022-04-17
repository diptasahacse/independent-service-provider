
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const ResetPassword = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <h3 className='text-primary'>Reset Your Password</h3>
            </div>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Send Reset Password
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default ResetPassword;