import React from 'react';
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
// import { makeStyles } from '@material-ui/styles';
// import { red } from '@material-ui/core/colors';
const useStyles = makeStyles(
    {
        red: {
        background:"red"
        },
        green: {
            background:"green" 
        },
        red1: {
        color:"red"
        },
        tab: {
            color: "#fff",
            textDecoration: "none",
            margin: "20px",
            textAlign: "center",
            border: "1px solid black",
            padding: "20px",
            borderRadius:"5px",
            alignItems:"center"
            
        }
    }
)

function NavBar() {
    const c = useStyles()
    return <div>
        <AppBar className={c.green } position='static'>
            <Toolbar>
                <NavLink className={c.tab} to={"/"} exact>suraj </NavLink>
              
                <NavLink className={c.tab} to={"all"} exact> All User</NavLink>
                
                  <NavLink className={c.tab} to={"add"} exact>Add User</NavLink>
             </Toolbar>
          </AppBar>
  </div>;
}

export default NavBar;
