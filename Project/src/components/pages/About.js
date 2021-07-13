import React from 'react';
import './About.css';
import logo1 from '../../images/img-2.jpg';
import logo2 from '../../images/img-3.jpg';
import logo3 from '../../images/img-4.jpg';
import logo4 from '../../images/img-5.jpg';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "flex-start"
 
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin:"30px"
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className="about">
      <div className="title">
        <h1>Recontrez L'équipe:</h1>
      </div>
      <div className="navavatar">
      <Avatar className={classes.large} src={logo1} />
      <Avatar className={classes.large} src={logo2} />
      <Avatar className={classes.large}  src={logo3} />
      <Avatar className={classes.large}  src={logo4}  />
    </div>
    </div>
  );
}
