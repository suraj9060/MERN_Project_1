import React from 'react';
import { Box , makeStyles , Typography } from '@material-ui/core';
import LandingImg from "../image/landingPage1.gif"
import LandingImg2 from "../image/landingPage1.png"

const useStyle = makeStyles({
  image: {
    width: "50%",
    height: "50%"
  },
  component: {
    margin:50
  }
})




function LandingPage() {
  const classes = useStyle() 


  return <Box >
       <Typography variant='h4' className={classes.component} style={{marginBottom:50}}>Learning MERN Stack</Typography>
      <Box>
         <img src={LandingImg} className={classes.image} width={"40%"} margin={"80px"} />
       <img src={LandingImg2} className={classes.image} width={"40%"} margin={"80px"} />
     </Box>
  </Box>;
}

export default LandingPage;
