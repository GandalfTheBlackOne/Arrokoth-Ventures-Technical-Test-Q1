import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import {
    BrowerRouter as Router, Link
} from 'react-router-dom';

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Arrokoth Ventures</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/DataContentA">
                        <Nav.Link href="#PageA">Page A</Nav.Link>
                    </Link>
                    <Link to="/DataContentB">
                        <Nav.Link href="#PageB">Page B</Nav.Link>
                    </Link>
                    
                </Nav>
            </Container>
        </Navbar>    
    )
}
export default NavBar;