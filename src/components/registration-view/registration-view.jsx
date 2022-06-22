import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    /* Send a request to the server for registration */
    /* then call props.onLoggedIn(username) */
    props.setRegistered(true);
    props.onLoggedIn(username);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={9} md={7} lg={6} xl={5}>
          <Card variant="light" bg="light">
            <Card.Body>
              <h1>Sign Up</h1>
              <Form>
                <Form.Group className="mt-4 mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Enter your username"
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
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Birthdate</Form.Label>
                  <Form.Control
                    type="text"
                    value={birthday}
                    onChange={(event) => setBirthday(event.target.value)}
                    placeholder="YYYY-MM-DD"
                  />
                </Form.Group>

                <Button
                  className="mt-3"
                  type="submit"
                  variant="success"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="pr-0 my-0">
              <Button
                className="col-10 offset-1"
                variant="link"
                onClick={() => props.setRegistered(true)}
              >
                Already registered? Log In
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  setRegistered: PropTypes.func.isRequired,
};
