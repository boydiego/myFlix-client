import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function ResgistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username, password, email, birthday);
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
      
      <label>
        Email:
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
      </label>

      <label>
        Birthday:
        <input type="text" value={birthday} onChange={event => setBirthday(event.target.value)} />
      </label>

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

ResgistrationView.propTypes = {
  Username: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  Birthday: PropTypes.instanceOf(Date).isRequired
}