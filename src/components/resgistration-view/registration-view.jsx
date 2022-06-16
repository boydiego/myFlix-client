import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
        <Card>
          <Card.Body>
            <Card.Title>Welcome!</Card.Title>
            <Card.Subtitle>Register</Card.Subtitle>
            <Form>
              <Form.Group controlId='formUsername'>
                <Form.Label>Username:</Form.Label>
                <From.Control type="text" placeholder='Username' minLength='5' required onChange={event => setUsername(event.target.value)} />
              </Form.Group>
              
              <Form.Group controlId='formPassword'>
                <Form.Label>Password:</Form.Label>
                <From.Control type="password" placeholder='Sectret Password' minLength='10' required onChange={event => setPassword(event.target.value)} />
              </Form.Group>

              <Form.Group controlId='formEmail'>
                <Form.Label>Email:</Form.Label>
                <From.Control type="text" placeholder='your-email@email.com' required onChange={event => setEmail(event.target.value)} />
                <From.Text className='text-muted'>We'll never share your email with anyone else</From.Text>
              </Form.Group>

              <Form.Group controlId='formBirthday'>
                <Form.Label>Birthday:</Form.Label>
                <From.Control type="text" placeholder='1990.10.23' required onChange={event => setBirthday(event.target.value)} />
              </Form.Group>

              <Button variant='primary' type="submit" onClick={handleSubmit}>Submit</Button>
            </Form>
          </Card.Body>
        </Card>
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