import React , { useEffect }  from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core"
import { useState } from 'react';
import { useHistory , useParams} from "react-router-dom"
import { editUser, getUsers } from './service/api';


const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "auto",
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

function EditUser() {
  const [user, setUser] = useState(initialValue)
    const { name, userName, email, phone } = user;
    let classes = useStyle();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);
    
       const loadUserData = async () => {
        
        const response = await getUsers(id);
           setUser(response.data)
           
    }

     let onValueChange = (e) => {
    setUser({...user , [e.target.name]:e.target.value})
  }
    

 
  
  const EditUserDetails = async () => {
    await editUser(id , user);
    history.push("/all")
  }


  

    return <div>
      <h1>add user Page  here I will add all user and then done</h1>
      <FormGroup className={classes.container}>
        <Typography variant="h4">Edit user</Typography>
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
        <Button onClick={()=> EditUserDetails()} variant='contained' color='primary'>Edit USER</Button>
       </FormGroup>
  </div>;
}

export default EditUser;
