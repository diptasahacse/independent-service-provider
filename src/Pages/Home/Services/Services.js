import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from './Service/Service';

const Services = () => {
    const [allServices, setAllServices] = useServices();
    return (
        <Container>
            <div className='text-center py-4'>
                <h2 className='text-primary py-3 text-center section-title'>Services</h2>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            allServices.map(service => <Service key={service.id} service={service}></Service>)

                        }
                        
                    </Row>
                </div>

            </div>


        </Container>
    );
};

export default Services;