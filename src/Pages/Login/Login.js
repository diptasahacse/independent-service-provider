import React, { useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorMessage;
    const loginFormSubmitHandler = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)


    }
    if (loading) {
        return <Loading></Loading>
    }
    if (!user?.user) {
        errorMessage = '';


    }
    else if (!user?.user?.emailVerified) {
        errorMessage = 'Please verify your email address';

    }
    else {
        navigate(from, { replace: true });
    }
    if (error) {
        errorMessage = error?.message
    }
    return (
        <Container>
            <div className='text-center mt-5'>
                <h3 className='text-primary'>Please Login</h3>
            </div>
            <div className='w-50 mx-auto'>
                <Form onSubmit={loginFormSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <p className='text-danger'>{errorMessage ? errorMessage : ''}</p>
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