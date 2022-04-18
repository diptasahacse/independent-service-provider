import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Subscribe = () => {
    const subscribeHandler = () => {
        toast('Subscribed')

    }
    return (
        <Container className='py-5'>
            <h2 className='text-primary py-3 text-center section-title'>Subscribe</h2>
            <InputGroup className="mb-3 w-75 mx-auto">
                <FormControl
                required
                size='lg'
                    placeholder="Subscribe to get newsletter"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button onClick={subscribeHandler} variant="outline-secondary" id="button-addon2">
                    Subscribe
                </Button>
            </InputGroup>
            <ToastContainer />

        </Container>
    );
};

export default Subscribe;