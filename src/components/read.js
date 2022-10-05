import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Read = () => {

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get('https://6335180eea0de5318a0cb253.mockapi.io/fakeData')
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  const setData = (data) => {
    let { id, firstName, lastName, checkBox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkBox);
  }

  const getData = () => {
    axios.get(`https://6335180eea0de5318a0cb253.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }
  const onDelete = (id) => {
    axios.delete(`https://6335180eea0de5318a0cb253.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData()
      });
  }
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.checkBox ? 'Checked' : 'Unchecked'}</Table.Cell>
                <Table.Cell><Link to="/update"><Button onClick={() => setData(data)}>Update</Button>
                </Link></Table.Cell>
                <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default Read;

