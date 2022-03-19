import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../store/auth.context';
import logo from './Geck-Logo.png';

const API_URI = process.env.REACT_APP_API_URI;

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { logInUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URI}/auth/login`, requestBody)
      .then((response) => {
        console.log('JWT token', response.data.authToken);

        const JWTToken = response.data.authToken;
        logInUser(JWTToken);
        props.history.push('/');
      })
      .catch((error) => {
        const errorDescription = error;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <Container className="d-grid h-100">
        <Form id="sign-in-form" className="form text-center p-3 w-100" onSubmit={handleLoginSubmit}>
          <img className="logo-big" src={logo} alt="logo" />
          <h1 className="mb-3 mb-5 fs-3 fw-normal text-dark">Please Log in</h1>
          <Form.Group controlId="sign-in-email-address">
            <Form.Control
              type="email"
              size="lg"
              placeholder="email"
              autoComplete="username"
              value={email}
              onChange={handleEmail}
              className="position-relative"
              required
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
              required
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me" />
          <div className="d-grid">
            <Button type="submit" className="button-big">
              Log in
            </Button>
          </div>
          <div className="d-grid">
            <p className="text-dark mt-5 mb-0">Don't have an account yet?</p>
            <Link to="/signup" className="button-small mt-2">
              Signup
            </Link>
          </div>
          <p className="mt-5 text-muted">&copy; 2021-2022 geckespence</p>
        </Form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </Container>
    </div>
  );
}

export default LoginPage;
