import { Table, TableHead, TableRow, TableCell, TableBody ,makeStyles, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsers } from './service/api';

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
    
  },
  thead: {
    '& > *': {
      background: "#000",
      color: "#fff",
      fontSize: 25,
      border:"2px solid red"
    }
  }
  , tbody:{
      '& > *': {
      background: "lightYellow",
      fontSize: 20,
      border:"2px solid red"
    }
  }
}) 


function AllUser() {
  const [users, setUsers] = useState([])
  const classes = useStyles()

  useEffect(() => {
    getALLUsers()
  },[])


  const getALLUsers = async() => {
    const response = await getUsers();
    console.log(response.data)
    setUsers(response.data)
  }
    return <div>
      <h1> I can see all users</h1>

      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>USER NAME</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>PHONE</TableCell>
            <TableCell>PHONE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map((item) => (
               <TableRow className={classes.tbody}>
                <TableCell>{ item.id }</TableCell>
                <TableCell>{ item.name}</TableCell>
                <TableCell>{ item.userName}</TableCell>
                <TableCell>{ item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' color='primary' style={{marginRight:10}} >edit</Button>
                  <Button variant='contained' color='secondary'>Delete</Button>
                </TableCell>
          </TableRow>
            ))
          }
        </TableBody>
      </Table>
  </div>;
}

export default AllUser;
