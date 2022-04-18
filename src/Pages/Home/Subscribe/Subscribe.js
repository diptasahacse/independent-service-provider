import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <Container className='py-5'>
            <h2 className='text-primary py-3 text-center section-title'>Subscribe</h2>
            <InputGroup className="mb-3 w-75 mx-auto">
                <FormControl
                size='lg'
                    placeholder="Subscribe to get newsletter"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Subscribe
                </Button>
            </InputGroup>

        </Container>
    );
};

export default Subscribe;