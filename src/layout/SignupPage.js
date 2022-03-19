import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signup } from '../services/auth';
import logo from './Geck-Logo.png';
import * as PATHS from '../utils/paths';
import * as USER_HELPERS from '../utils/userToken';

function SignupPage({ authenticate }) {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = form;
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
      email,
      password,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error('Signup was unsuccessful: ', res);
        return setError({
          message: 'Signup was unsuccessful! Please check the console.',
        });
      }
      // successful signup
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
          <h1 className="mb-4 fs-3 fw-normal text-dark">Please sign up</h1>
          <Form.Group className="mb-3" controlId="sign-in-username">
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
          <Form.Group className="mb-3" controlId="sign-in-email-address">
            <Form.Control
              type="email"
              size="lg"
              placeholder="email"
              name="email"
              autoComplete="username"
              value={email}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              className="position-relative mt-3"
              required
            />

            {error && (
              <div className="error-block">
                <p>There was an error submiting the form:</p>
                <p>{error.message}</p>
              </div>
            )}
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
      </Container>
    </div>
  );
}

export default SignupPage;
