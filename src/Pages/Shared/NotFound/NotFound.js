import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import notFound from '../../../images/others/notfound.gif'

const NotFound = () => {
    return (
        <Container>
            <Row xs={1} md={2}>
                <Col className='d-flex align-items-center'>
                    <div>
                        <h2 className='fw-bold fs-1'>404</h2>
                        <h2 className='fw-bold fs-1'>Page Not Found</h2>
                    </div>
                </Col>
                <Col>
                    <img className='w-100' src={notFound} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;