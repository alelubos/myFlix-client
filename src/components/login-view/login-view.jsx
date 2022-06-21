import React, { useState } from 'react';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <>
      <form>
        <h1>Log In</h1>
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <p>
        Unregistered? <br />
        <button onClick={() => props.setRegistered(false)}>Sign Up</button>
      </p>
    </>
  );
}
