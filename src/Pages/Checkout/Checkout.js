import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useService from '../../hooks/useService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [serviceId, setServiceId] = useState(0);
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        let id = JSON.parse(localStorage.getItem('serviceid'))
        setServiceId(id)

    }, [])
    const serviceObj = useService(serviceId);

    const checkoutOnSubmit = (event) => {
        event.preventDefault()
        toast('thank you for the booking.')

    }
    return (
        <Container>
            <div className='border p-3 m-3 w-50 mx-auto'>
                <h5>Service Name: {serviceObj?.name}</h5>
                <p>Price: ${serviceObj?.price}</p>
            </div>
            <div className=' w-75 mx-auto border p-3 m-3'>
                <Form onSubmit={checkoutOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="name" value={user?.displayName} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={user?.email} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>

            
                    
                    <Button variant="primary" size={'sm'} type="submit">
                        Book
                    </Button>
                </Form>
                <ToastContainer />
            </div>


        </Container>
    );
};

export default Checkout;