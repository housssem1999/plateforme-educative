import React from 'react';
import './About.css';
import logo1 from '../../images/img-2.jpg';
import logo2 from '../../images/img-3.jpg';
import logo3 from '../../images/img-4.jpg';
import logo4 from '../../images/img-5.jpg';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin:"50px",
    boxShadow:"5px 5px 5px 5px #888888",
    opacity:"18"
  },
}));
const list=[
  {id:1, nom :"Ramy Znaki", profession:"Cofondateur,Web développeur en FullStack JS"},
  {id:2, nom :"ESSIA BEN HMIDA", profession:"Créatrice de contenu et UI/UX designer"},
  {id:3, nom :"HASSEN METTICHI", profession:"Digital opérationnel"},
  {id:4, nom :"YOSRA MEJRI", profession:"Créatrice de contenu et responsable communication"},
];

export default function About() {
  const classes = useStyles();
  return (
    <>

      <div className="title">
        <h1>Recontrez L'équipe:</h1>
      </div>
    <div className="about">
      <div className="navavatar">
      <Avatar className={classes.large} src={logo1} />
      <Avatar className={classes.large} src={logo2} />
      <Avatar className={classes.large}  src={logo3} />
      <Avatar className={classes.large}  src={logo4}  />
      </div>
        <div className="des">
          {list.map(item =>(
            <div className="desc" key={item.id}><h2  style={{textAlign:"center"}}>{item.nom}</h2><br></br><p>{item.profession}</p></div>
          ))}
        </div>
    </div>
  </>
  );
}
