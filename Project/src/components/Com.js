import React from 'react';
import { makeStyles } from '@material-ui/core';
import "./Com.css";

const useStyles = makeStyles((theme) => ({
  root: {

    borderRadius: 5,
    boxShadow: "0 10px 30px #BBB",
    padding: 10,
    marginRight:"10px",
    display:"flex",
    flexDirection:"column"
  },
  paper: {
    padding: theme.spacing(8),
    display:"flex",
    justifyContent:'center',
   
    
  },
 other:{
   borderRadius:"24px",
   border:"1px solid #1dbc4 " 
 },
}));

export default  function Com () {
    const classes =useStyles()
    return(
      <div className={classes.paper}>
          <div className="col">
            <div>Apprenant</div>
          </div>
          <div className="col">
            <div className="svg-inline--fa fa-book-reader fa-w-16"><img src="../images/book.svg" alt="Coach"></img></div>
          </div>
      </div>
    
    );
}