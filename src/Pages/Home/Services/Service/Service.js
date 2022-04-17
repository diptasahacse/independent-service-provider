import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ServiceDescription from './ServiceDescription/ServiceDescription';

const Service = ({ service }) => {
    const { name, price, descriptionList, img } = service;
    const navigate = useNavigate();
    const checkoutButtonHandler = ()=>{
        navigate('/checkout')

    }

    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className='text-center'>
                        {
                            descriptionList.map((item, index) => <ServiceDescription item={item} key={index}></ServiceDescription>)
                        }
                    </div>

                </Card.Body>
                <Card.Footer className='border-0 bg-white'>
                    <Button onClick={checkoutButtonHandler} className='btn btn-primary btn-sm'>Checkout</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;