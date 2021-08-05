import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cc from '../images/img-7.jpg'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height:350,
    background: '#1dbcb4',
    border: "1px solid darkslateblue",
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  bullet: {
    width: "350px",
    height :"77%",
    marginTop:"10px",
    margin:"auto",
    border :"1px solid darkslateblue",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily:`Arial, Helvetica, sans-serif`,
    textAlign:"center"
  },
  pos: {
    width:"320px",
    marginLeft:"13px"
  },
  sop: {
    marginLeft:"130px",
    marginTop:"10px"

  }
});

export default function CardCourse(props) {
  const classes = useStyles();
  return (
    <div className="row">
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.bullet}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.cours.titre}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            <img src={cc} alt="" style={{width:"90%",height:"200px",marginLeft:"auto"}}></img>
            
            </Typography>
        </CardContent>
        <CardActions>
          <Typography className={classes.sop} color="textSecondary">
            <Button variant="contained" color="primary" onClick={() => props.clickCommencer(props.cours._id)}>Commencer</Button>
            { localStorage.getItem('role') === 'Admin' &&
            <Button variant="contained" color="primary"  onClick={() => props.clickHandler(props.cours._id)}>Delete</Button>
            }
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
