import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();
    const checkoutButtonHandler = () => {
        localStorage.setItem('serviceid', id)
        navigate('/checkout')



    }

    return (
        <Col>
            <Card className='h-100 shadow border-0'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            description
                        }
                        
                    </Card.Text>


                </Card.Body>
                <Card.Footer className='border-0 bg-white'>
                    <p>$ {price}</p>
                    <Button onClick={checkoutButtonHandler} className='btn btn-primary btn-sm'>Checkout</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;