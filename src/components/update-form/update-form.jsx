import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export function UpdateForm(props) {
  const { user, handleUpdateUser } = props;
  const { username } = user;
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBirthday, setNewBirthday] = useState('');

  // Declare hook for each input error message (when invalid)
  const [values, setValues] = useState({
    passwordErr: '',
    emailErr: '',
    birthdayErr: '',
  });

  const validate = () => {
    let isReq = true;
    setValues((prev) => {
      return {
        passwordErr: '',
        emailErr: '',
        birthdayErr: '',
      };
    });
    if (!newPassword) {
      setValues((prevValues) => {
        return { ...prevValues, passwordErr: 'A password is required.' };
      });
      isReq = false;
    } else if (newPassword.length < 6) {
      setValues((prevValues) => {
        return {
          ...prevValues,
          passwordErr: 'Password must be at least 6 characters long.',
        };
      });
      isReq = false;
    }
    if (!newEmail) {
      setValues({
        ...values,
        emailErr: 'Email is required.',
      });
      isReq = false;
    } else if (newEmail.indexOf('@') === -1) {
      setValues((prevValues) => {
        return { ...prevValues, emailErr: 'Enter a valid email address.' };
      });
      isReq = false;
    }
    if (!newBirthday) {
      setValues((prevValues) => {
        return { ...prevValues, birthdayErr: 'Enter a valid date.' };
      });
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    console.log('handleSubmit, event.target.value: ', event.target.value);
    const isReq = validate();
    if (isReq) {
      let updatedUser = {
        username: username,
        password: newPassword,
        email: newEmail,
        birthday: newBirthday,
      };
      handleUpdateUser(updatedUser, token);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={9} md={7} lg={6} xl={5}>
          <Card variant="light" bg="light">
            <Card.Body>
              <h1>Update User Form</h1>
              <Form>
                <Form.Group className="mt-4 mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={username} disabled />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(event) => setNewPassword(event.target.value)}
                    placeholder="Set a password"
                  />
                  {values.passwordErr && (
                    <p className="validation-message">{values.passwordErr}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter a valid email"
                    onChange={(event) => setNewEmail(event.target.value)}
                  />
                  {values.emailErr && (
                    <p className="validation-message">{values.emailErr}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(event) => setNewBirthday(event.target.value)}
                  />
                  {values.birthdayErr && (
                    <p className="validation-message">{values.birthdayErr}</p>
                  )}
                </Form.Group>

                <Button
                  className="mt-3"
                  type="submit"
                  variant="success"
                  onClick={(e) => handleSubmit(e)}
                >
                  UPDATE
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
