import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { login } from '../services/auth';
import './SignupPage';
import logo from './Geck-Logo.png';
import * as PATHS from '../utils/paths';
import * as USER_HELPERS from '../utils/userToken';

export default function LoginPage({ authenticate }) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: 'Invalid credentials' });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.LANDING);
    });
  }

  return (
    <div>
      <Container className="d-grid h-100">
        <Form
          id="sign-in-form"
          className="form text-center p-3 w-100"
          onSubmit={handleFormSubmission}
        >
          <img className="logo-big" src={logo} alt="logo" />
          <h1 className="mb-3 mb-5 fs-3 fw-normal text-dark">Please log in</h1>
          <Form.Group controlId="sign-in-email-address">
            <Form.Control
              type="text"
              size="lg"
              placeholder="username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={handleInputChange}
              className="position-relative"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="sign-in-password">
            <Form.Control
              type="password"
              name="password"
              size="lg"
              placeholder="password"
              value={password}
              onChange={handleInputChange}
              autoComplete="current-password"
              className="position-relative mt-3"
              minLength="6"
              required
            />
          </Form.Group>

          {error && (
            <div className="error-block">
              <p>There was an error submiting the form:</p>
              <p>{error.message}</p>
            </div>
          )}

          <div className="d-grid">
            <Button type="submit" className="button-big">
              Log in
            </Button>
          </div>

          <div className="d-grid">
            <p className="text-dark mt-5 mb-0">Don&apos;t have an account yet?</p>
            <Link to="/signup" className="button-small mt-2">
              Signup
            </Link>
          </div>
          <p className="mt-5 text-muted">&copy; 2021-2022 geckespence</p>
        </Form>
      </Container>
    </div>
  );
}
