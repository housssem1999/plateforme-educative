import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './CardAdd.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height:350,
    background: '#1dbcb4',
    border: 1,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : '110px',
    fontSize: '14',
  },
  pos: {
    marginBottom: 12,
  }
});

export default function CardAdd({cours}) {
  const classes = useStyles();

  return (
    <div className="row">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                <button className="btnnn">
                  <a href="addcourse">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </button>
            </Typography>
          </CardContent>
        </Card>
    </div>
  );
}
