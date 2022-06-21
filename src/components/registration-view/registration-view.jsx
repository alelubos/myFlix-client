import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

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
    <>
      <form>
        <h1>Sign Up</h1>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Birth Date (YYYY-MM-DD):
          <input
            type="text"
            value={birthday}
            onChange={(event) => setBirthday(event.target.value)}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

RegistrationView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  setRegistered: PropTypes.func.isRequired,
};
