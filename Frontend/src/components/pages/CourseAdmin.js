import React, { useState ,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

export default function CourseAdmin() {
  const classes = useStyles();
  const [course,setCourse]=useState();
  const [value, setValue] = useState();
  const params = useParams()

  const config = {  
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json"
    }
  }
  useEffect(()=>{
    const fetchData = async()=>{
        const res = await axios.get(`/api/course/${params.id}`,config)
        setCourse(res.data)  
    }
    fetchData()
    
  },[])

  return (
    <div className="allpage">
        <div className="header">
            <div className="card">
                <Card className={classes.root}>
                        <CardHeader/>
                            <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {course.description}</Typography>
                    </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </CardActions>
                </Card>
            </div>
            <div className="title">{course.title}</div>            
            <div className="soustitle">{course.description}</div>
            <div className="review">
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Controlled</Typography>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                </Box>
            </div>
        </div>

</div>







    
  );
}

