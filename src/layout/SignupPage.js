import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from './Geck-Logo.png';

const API_URI = process.env.REACT_APP_API_URI;

function SignupPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URI}/auth/signup`, requestBody)
      .then((response) => props.history.push('/login'))
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <Container className="d-grid h-100">
        <Form
          id="sign-in-form"
          className="form text-center p-3 w-100"
          onSubmit={handleSignupSubmit}
        >
          <img className="logo-big" src={logo} alt="logo" />
          <h1 className="mb-4 fs-3 fw-normal text-dark">Please Sign up</h1>
          <Form.Group className="mb-3" controlId="sign-in-username">
            <Form.Control
              type="text"
              size="lg"
              placeholder="username"
              autoComplete="username"
              value={name}
              onChange={handleName}
              className="position-relative"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-email-address">
            <Form.Control
              type="email"
              size="lg"
              placeholder="email"
              autoComplete="username"
              value={email}
              onChange={handleEmail}
              className="position-relative"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-password">
            <Form.Control
              type="password"
              size="lg"
              placeholder="password"
              alue={password}
              onChange={handlePassword}
              autoComplete="current-password"
              className="position-relative mt-3"
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me" />
          <div className="d-grid">
            <Button type="submit" className="button-big">
              Sign Up
            </Button>
          </div>
          <div className="d-grid">
            <p className="text-dark mt-5 mb-0">Already have an account?</p>
            <Link to="/login" className="button-small mt-2">
              Login
            </Link>
          </div>
          <p className="mt-5 text-muted">&copy; 2021-2022 geckespence</p>
        </Form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </Container>
    </div>
  );
}

export default SignupPage;
