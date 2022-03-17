import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../store/auth.context';
import logo from './Geck-Logo.png';

function Header() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white">
          <img className="logo" src={logo} alt="logo" />
          Geckspence
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white  ps-5" title="Home">
              {/* title attribute to make up for layout shift */}
              Home
            </Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link
                  as={NavLink}
                  href="/dashboard"
                  className="text-white  ps-5"
                  title="dashboard"
                >
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  href="/logout"
                  className="text-white  ps-5"
                  title="logout"
                  onClick={logOutUser}
                >
                  Logout
                  <span>{user.name}</span>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login" className="text-white  ps-5" title="Log in">
                  Log in
                </Nav.Link>
                <Nav.Link href="/signup" className="text-white  ps-5" title="Sign up">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
