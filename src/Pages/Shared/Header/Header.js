import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={CustomLink} to='/about'>About</Nav.Link>
                        <Nav.Link as={CustomLink} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to='/login'>Login</Nav.Link>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;