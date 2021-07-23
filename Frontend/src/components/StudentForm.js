import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: 5,
    boxShadow: "0 10px 30px #BBB",
    padding: 10,
    marginRight:"20px"
  },
  paper: {
    padding: theme.spacing(1),
    display:"flex",
    justifyContent:'center'
  },
 
}));

export default function StudentForm() {
  const classes = useStyles();

  return (
    <div className={classes.root} direction="row">
        <Grid className={classes.paper} container spacing={4} direction="row">
        <Grid item sm={6} xs={6}>
            <div><h2>Parent</h2></div>
            
        </Grid>
        <Grid item sm={6} xs={6}>
            <div><h2>Enfant</h2></div>
        </Grid>
        
        <Grid item sm={6} xs={6}>
            <div><label>Nom et prénom</label>    <input className={classes.paper}/></div>
            
        </Grid>
        
        <Grid item sm={6} xs={6}>
            <div><label>Nom et prénom</label> <input className={classes.paper}/></div>
            
        </Grid>
        <Grid item sm={6} xs={6}>
            <div><label>Téléphone</label> <input className={classes.paper}/></div>
            
        </Grid>
      
        <Grid item sm={6} xs={6}>
            <div><label>Age</label> <input className={classes.paper}/></div>
            
        </Grid>
        <Grid item sm={6} xs={6}>
            <div><label>Email</label> <input className={classes.paper}/></div>
            
        </Grid>
        <Grid item sm={6} xs={6}>
            <div><label>Cours</label>  <input className={classes.paper}/> </div>
            
        </Grid>
        </Grid>
        <div><br></br><br></br><button className="btn" >Sign_up</button></div>
        <div><p style={{textAlign:"end"}}>Vous recevrez un email de conformation et de payment</p></div>
    </div>
  );
}