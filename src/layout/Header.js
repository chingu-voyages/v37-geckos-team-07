import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Geckspance
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white  ps-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="text-white  ps-5">
              Dashboard
            </Nav.Link>
            <Nav.Link href="#" className="text-white  ps-5">
              Log in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
