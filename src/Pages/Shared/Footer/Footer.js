import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='py-5 bg-primary'>
            <div className='text-center'>
                <Container>
                    <p className='m-0'>&copy; Copyright {new Date().getFullYear()}. All Rights Reserved</p>
                </Container>
            </div>
        </footer>

    );
};

export default Footer;