import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  }

  return (
    <Row className='justify-content-sm-center'>
      <Col sm ={10} md={8} lg={6} xl={5}>
        <Form>
          <Form.Group controlId='formUsername'>
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" onChange={event => setUsername(event.target.value)} />    
          </Form.Group>

          <Form.Group controlId='formPassword'>
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" onChange={event => setPassword(event.target.value)} />
          </Form.Group>

          <Button variant='primary' type='submit' onClick={handleSubmit}>
            Submit
          </Button>

          <Button variant='secondary' type='link'>
            Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

LoginView.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUsername: PropTypes.string,
  setPassword: PropTypes.string
}