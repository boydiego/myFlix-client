import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  }

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>

      <button type="submit" onClick={handleSubmit}>Submit</button>

      <button type="button">Register</button>
    </form>
    
  )
}

LoginView.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.string,
  setPassword: PropTypes.string
}