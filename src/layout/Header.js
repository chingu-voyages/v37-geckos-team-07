import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../store/auth.context';
import logo from './Geck-Logo.png';

function Header() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand className="text-white">
            <img className="logo" src={logo} alt="logo" />
            Geckspence
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn ? (
              <>
                <LinkContainer to="/home">
                  <Nav.Link className="text-white  ps-5">
                    {/* title attribute to make up for layout shift */}
                    Home
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/dashboard">
                  <Nav.Link className="text-white  ps-5">Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/logout">
                  <Nav.Link className="text-white  ps-5" onClick={logOutUser}>
                    Logout
                    <span>{user.name}</span>
                  </Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link to="" className="text-white  ps-5">
                    Log in
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
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
