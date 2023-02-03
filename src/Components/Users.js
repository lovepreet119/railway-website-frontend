import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

const Users = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        let data = await axios.get('http://localhost:5000/users').then(response => response.data).then(data => data.result);
        setUsers(data);
        return data;
    }
    useEffect(() => {
        fetchUsers();
    })
    return (
        <Container>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => (
                                <tr key={item.username}>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default Users
