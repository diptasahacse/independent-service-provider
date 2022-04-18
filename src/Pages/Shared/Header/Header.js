import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Loading from '../Loading/Loading';


const Header = () => {
    const [user, loading] = useAuthState(auth);
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
                        {
                            user? <button onClick={()=> signOut(auth)} className='btn btn-link text-decoration-none text-danger'>Logout</button> : <Nav.Link as={CustomLink} to='/login'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;