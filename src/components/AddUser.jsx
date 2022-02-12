import React from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core"
import { useState } from 'react';
import { useHistory} from "react-router-dom"

import { adduser } from './service/api';

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "auto",
    border: "2px solid  black",
    borderRadius: "20px",
    '& > *': {
      margin:"10px"
    }
    
  }
  
})

const initialValue = {
  name: "",
  userName: "",
  email: "",
  phone:""
}

function AddUser() {
  const [user, setUser] = useState(initialValue)
  const { name, userName, email, phone } = user;
  const history = useHistory()

  let onValueChange = (e) => {
    console.log(e.target.value)
    setUser({...user , [e.target.name]:e.target.value})
     console.log(user)
  }
  
  const addUserDetails = async () => {
    await adduser(user);
    history.push("./all")
  }


  let classes = useStyle()

    return <div>
      <h1>add user Page  here I will add all user and then done</h1>
      <FormGroup className={classes.container}>
        <Typography variant="h4">add user</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
        </FormControl>
         <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name='userName' value={userName} />
        </FormControl>
         <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name='email' value={email} />
        </FormControl>
         <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input  onChange={(e)=>onValueChange(e)} name='phone' value={phone}/>
        </FormControl>
        <Button onClick={()=>addUserDetails()} variant='contained' color='primary'>ADD USER</Button>
       </FormGroup>
  </div>;
}

export default AddUser;
