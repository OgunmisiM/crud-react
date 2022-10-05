import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Update = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [id, setID] = useState(null);
  let history = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckBox(localStorage.getItem('Checkbox Value'));
  }, []);

  const updateAPIData = () => {
    axios.put(`https://6335180eea0de5318a0cb253.mockapi.io/fakeData/${id}`, {
      firstName, lastName, checkBox
    }).then(() => {
      history.push('/read')
    });
  }

  return (
    <div>
      <Form className='create-form'>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' checked={checkBox} onChange={(e) => setCheckBox(!checkBox)} />
        </Form.Field>
        <Link to="/read"><Button onClick={updateAPIData} type='submit'>Update</Button></Link>
      </Form>
    </div>
  )
}

export default Update;
