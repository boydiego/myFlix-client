import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
        <Card>
          <Card.Body>
            <Card.Title>Welcome!</Card.Title>
            <Card.Subtitle>Login</Card.Subtitle>
              <Form>
                <Form.Group controlId='formUsername'>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type="text" placeholder='Username' minLength='5' required onChange={event => setUsername(event.target.value)} />    
                </Form.Group>

                <Form.Group controlId='formPassword'>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder='Password' minLength='10' required onChange={event => setPassword(event.target.value)} />
                </Form.Group>

                <Button variant='primary' type='submit' onClick={handleSubmit}>
                  Submit
                </Button>

                <Button variant='secondary' type='link'>
                  Register
                </Button>
              </Form>
          </Card.Body>
        </Card>
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