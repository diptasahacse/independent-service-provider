import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:"200px"}}>
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default Loading;