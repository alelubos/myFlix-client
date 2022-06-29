import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
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
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                  />
                </Form.Group>
                <Button className="mt-3" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <Button
                className="ma-0 col-10 offset-1"
                variant="link"
                onClick={() => props.setRegistered(false)}
              >
                Not Registered? Sign Up
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  setRegistered: PropTypes.func.isRequired,
};
