import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Declare hook for each input error message (in case of invalid)
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  // Validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Username is required.');
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr('Username must be at least 5 characters long.');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password is required.');
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr('Password must be at least 6 characters long.');
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send a request to the server for authentication */
      axios
        .post('https://top-flix.herokuapp.com/login', {
          username: username,
          password: password,
        })
        .then((res) => {
          const data = res.data;
          props.onLoggedIn(data);
        })
        .catch((err) => {
          console.log('No such user.');
        });
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={9} md={7} lg={6} xl={5}>
          <Card variant="light" bg="light">
            <Card.Body>
              <h1>Log In</h1>
              <Form>
                <Form.Group className="mt-4 mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Enter you username"
                  />
                  {/* Code to Display username validation error */}
                  {usernameErr && (
                    <p className="validation-message">{usernameErr}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                  />
                  {/* Code to Display password validation error */}
                  {passwordErr && (
                    <p className="validation-message">{passwordErr}</p>
                  )}
                </Form.Group>

                <Button
                  variant="primary"
                  className="mt-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>

            <Card.Footer>
              <Link to="/register">
                <Button className="ma-0 col-10 offset-1" variant="link">
                  Not Registered? Sign Up
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
