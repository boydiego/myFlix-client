import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Row className='justify-content-sm-center'>
      <Col sm ={10} md={8} lg={6} xl={5}>
        <Form>
          <Form.Group controlId='formUsername'>
            <Form.Label>Username:</Form.Label>
            <From.Control type="text" onChange={event => setUsername(event.target.value)} />
          </Form.Group>
          
          <Form.Group controlId='formPassword'>
            <Form.Label>Password:</Form.Label>
            <From.Control type="password" onChange={event => setPassword(event.target.value)} />
          </Form.Group>

          <Form.Group controlId='formEmail'>
            <Form.Label>Email:</Form.Label>
            <From.Control type="text" onChange={event => setEmail(event.target.value)} />
          </Form.Group>

          <Form.Group controlId='formBirthday'>
            <Form.Label>Birthday:</Form.Label>
            <From.Control type="text" onChange={event => setBirthday(event.target.value)} />
          </Form.Group>

          <Button variant='primary' type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </Col>
    </Row>
  )
}

ResgistrationView.propTypes = {
  Username: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  Birthday: PropTypes.instanceOf(Date).isRequired
}