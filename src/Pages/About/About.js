import React from 'react';
import { Container } from 'react-bootstrap';
import dipta from '../../images/others/dipta.jpg'

const About = () => {
    return (
        <Container>
            <div>
                <h2 className='text-primary'>About</h2>
            </div>
            <div className='mt-5 text-center'>
                <img src={dipta} className='rounded shadow border-top-0 border-bottom-0 rounded-circle border border-2 border-primary' style={{height:'200px', width:"200px"}} alt="" />

                <h2>Dipta Saha</h2>
                <p>I want to be a Full stack Web Developer. Currently I am doing a Training on Complete web Development at Programming Hero. After complete this journey I will want to get a job in a Software company as a Font End Developer or MERN stack Developer. This is not my Long term goal. My Long term goal is, I want to be an Entrepreneur on Web technology. I believe I can be that. Because, I am a hard worker. I Love Computer Programming, I love to code, I like to think logic, and one more thing I like to drink Coffee.</p>
            </div>
        </Container>
    );
};

export default About;