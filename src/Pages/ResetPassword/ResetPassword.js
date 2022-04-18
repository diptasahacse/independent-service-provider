
import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    let errorMessage;
    const emailRef = useRef('');
    if (sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorMessage = error.message

    }
    const forgetPasswordSubmitHandler = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        if (!error) {
            toast('Sent password reset email')

        }


    }
    return (
        <Container className='vh-100 p-4'>
            <div className='mt-5 py-4'>
                <div className='text-center'>
                    <h3 className='text-primary'>Reset Your Password</h3>
                </div>
                <Form onSubmit={forgetPasswordSubmitHandler} className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <p className='text-danger'>{errorMessage ? errorMessage : ''}</p>
                    <div className='text-center'>
                        <Button variant="primary" type="submit">
                            Send Reset Password
                        </Button>
                    </div>
                </Form>
                <ToastContainer />
            </div>
        </Container>
    );
};

export default ResetPassword;