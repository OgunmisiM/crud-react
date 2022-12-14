import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const postData = () => {
    axios.post('https://6335180eea0de5318a0cb253.mockapi.io/fakeData', {
      firstName, lastName, checkBox
    }).then(() => {
      history.push('/read')
    });
  }

  let history = useNavigate();

  return (
    <div>
      <Form className='create-form'>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckBox(!checkBox)} />
        </Form.Field>
        <Link to="/read"><Button onClick={postData} type='submit'>Submit</Button></Link>

      </Form>
    </div>
  )
}

export default Create;
