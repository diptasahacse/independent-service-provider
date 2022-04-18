import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MailIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid'

const Contacts = () => {
    return (
        <div className='bg-secondary py-4 text-white  text-center'>
            <Container>
                <h2 className='text-white py-3 section-title'>Contact Us</h2>
                <p> <MailIcon style={{height:"20px", width:"20px"}}></MailIcon> diptasaha.lpu.cse@gmail.com</p>
                <p> <LocationMarkerIcon style={{height:"20px", width:"20px"}}></LocationMarkerIcon> Khulna, Bangladesh</p>
                <p> <PhoneIcon style={{height:"20px", width:"20px"}}></PhoneIcon> +8801613146412</p>
            </Container>

        </div>
    );
};

export default Contacts;