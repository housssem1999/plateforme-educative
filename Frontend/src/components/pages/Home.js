import React,{useState} from 'react';
import "../Button.css";
import Commencer from '../Commencer';
import '../../App.css';
import Com from '../Com';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  titre:{
    textAlign:"center",
    backgroundColor:"#391465"
  }
}));


export default function Home() {
  const [openCom,setOpencom] =useState(false);
  const classes = useStyles();
  const username = localStorage.getItem('username');
 

  return (<>
  <div className="home">
    <></>

      <div className="commencer">
        <p>Apprendre en<br></br>s'amusant {username}</p><br></br>
        <button onClick={() => { setOpencom(true);}} className="btnn">Commencer</button>
        </div>
      </div>    
        <Commencer title="Qui es-tu ?" className={classes.titre} openCom={openCom} setOpencom={setOpencom}>
            <Com />
        </Commencer>
      </>

  );
}
