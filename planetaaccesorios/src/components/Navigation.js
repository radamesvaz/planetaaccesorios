import React from 'react';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import logo from '../assets/logo.jpg';


function Navigation() {
    return(
        <div>
             <Navbar bg="light" expand="lg" className="mtop">
                <Navbar.Brand href="#home"> <img alt='logo' style={{height: 55}} src={logo} />Planeta Accesorios</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Lo mas nuevo</Nav.Link>
                    <Nav.Link href="#pricing">Galeria</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;