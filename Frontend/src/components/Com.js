import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import {ReactComponent as ReactLogo} from "../images/book.svg";
import {ReactComponent as ReactLogoo} from "../images/teacher.svg";
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
    padding: theme.spacing(6),
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
          <div className="col" >
          <ReactLogo style={{alignItems:"center",color:"#1dbcb4"}}/>
            <Link to="/about" className="label">Apprenant</Link>
          </div>
          <div className="col">
              <ReactLogoo style={{height:"120%",width:"120%",alignItems:"center",color:"#1dbcb4",marginTop:"-5px"}}/>
              <Link to="/about" className="label">Coach</Link>
          
          </div>
      </div>
    
    );
}