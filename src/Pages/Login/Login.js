import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <Container>
            <div className='text-center mt-5'>
                <h3 className='text-primary'>Please Login</h3>
            </div>
            <div className='w-50 mx-auto'>
                <Form className=''>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Button size='sm' variant="primary" type="submit">
                            Login
                        </Button>
                        <Link className='text-decoration-none' to='/resetpassword'>Forgot your password?</Link>
                    </div>

                </Form>
                <div className='mt-5 text-center'>
                    <hr />
                    <h4>Don't have an account..?</h4>
                    <Link className='btn btn-outline-primary btn-sm form-control mt-3' to="/register">Register</Link>
                    <p className='my-3'>Or</p>
                    <SocialLogin></SocialLogin>

                </div>

            </div>


        </Container>
    );
};

export default Login;