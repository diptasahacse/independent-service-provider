import React, { useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [isChecked, setIsChecked] = useState(false);
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    let message;
    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const registerFormOnSubmitHandler = async (event) => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });


    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        message = 'Verify link is sent your email. Please verify before login.';
    }
    const registerCheckHandler = (event) => {
        if (event.target.checked) {
            setIsChecked(true)
        }
        else {
            setIsChecked(false)
        }

    }
    if (error || updateError) {
        errorMessage = error ? error.message : updateError.message;

    }

    return (
        <Container>
            <div className='text-center mt-5'>
                <h3 className='text-primary'>Register</h3>
            </div>
            <div className='w-50 mx-auto'>
                <Form onSubmit={registerFormOnSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control required ref={nameRef} type="text" placeholder="Full Name" />
                    </Form.Group>
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
                    <Form.Group onChange={registerCheckHandler} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Agree to out terms and conditions" />
                    </Form.Group>
                    {
                        message ? <p className='text-success'>{message}</p> : ''
                    }

                    <p className='text-danger'>{errorMessage ? errorMessage : ''}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Button disabled={!isChecked} size='sm' variant="primary" type="submit">
                            Register
                        </Button>
                        <Link className='text-decoration-none' to='/resetpassword'>Forgot your password?</Link>
                    </div>

                </Form>
                <div className='mt-5 text-center'>
                    <hr />
                    <h4>Already have an account..?</h4>
                    <Link className='btn btn-outline-primary btn-sm form-control mt-3' to="/login">Login</Link>
                    <p className='my-3'>Or</p>
                    <SocialLogin></SocialLogin>

                </div>

            </div>
        </Container>
    );
};

export default Register;