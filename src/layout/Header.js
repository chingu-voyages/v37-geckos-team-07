import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white">
            Geckspence
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className="text-white  ps-5" title="Home">
                {/* title attribute to make up for layout shift */}
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard" className="text-white  ps-5" title="Dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link to="/signin" className="text-white  ps-5" title="Log in">
                Log in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
