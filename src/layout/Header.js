import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './Geck-Logo.png';
import * as PATHS from '../utils/paths';

function Header({ user, handleLogout }) {
  return (
    <Navbar expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <LinkContainer to={PATHS.LANDING}>
          <Navbar.Brand className="text-white">
            <img className="logo" src={logo} alt="logo" />
            Geckspence
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <LinkContainer to={PATHS.PROTECTEDPAGE}>
                  <Nav.Link className="text-white  ps-5">
                    {/* title attribute to make up for layout shift */}
                    Home
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to={PATHS.PROTECTEDPAGE1}>
                  <Nav.Link className="text-white  ps-5">Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/logout">
                  <Nav.Link className="text-white  ps-5" onClick={handleLogout}>
                    Logout
                    <span>{user.name}</span>
                  </Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to={PATHS.LOGINPAGE}>
                  <Nav.Link to="" className="text-white  ps-5">
                    Log in
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={PATHS.SIGNUPPAGE}>
                  <Nav.Link className="text-white  ps-5">Sign Up</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
