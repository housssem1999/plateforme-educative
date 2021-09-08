import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardCourse from '../CardCourse';
import './Courses.css'
import '../../App.css';
import CardAdd from './CardAdd';
import { Link } from '@material-ui/core';


 
export default function Courses(props) {
  const [cours,setCours] = useState([]);
  const [term,setTerm] = useState('');

  const config = {  
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json"
    }
  }
  const deleteCours = async (id) => {
      await axios.delete(`/api/courses/${id}`,config);
      const newCours = cours.filter((cc) => {
        return cc._id !== id;
      });
      
      setCours(newCours);
    };

    const commencer = async(id,idUser) =>{
      const neww = await axios.put(`/api/users/${idUser}/${id}`,config);
      
    }

    const handleInputChange = async (e) => {
      const term = e.target.value;
      setTerm(term);
  
      if(term.length < 1) {
        const res = await axios.get('/api/courses', config)
        setCours(res.data);
      } else {
        const newCours = await axios.get(`/api/course?term=${term}`,config);
        setCours(newCours.data);    
      }
    }
    
  useEffect(()=>{
    const fetchData = async()=>{
        const res= await axios.get('/api/courses',config)
        setCours(res.data)  
    }
    fetchData()
    
  },[])
  
  return (
  <div className="allpage">  
    <div className="roow"> 
        <div className="col "> 
            <div className="card"> 
                <div className="card-content"> 
                    <div className="input-field"> 
                        <input className="input" type="text" placeholder="Recherche des cours" value={term} onChange={e => handleInputChange(e)} /> 
                    </div> 
                </div>
            </div>
        </div>
    </div>
    <div className="roow">      
      {cours.map((c)=>
      <CardCourse clickHandler={deleteCours} clickCommencer = {commencer} className="row" key={c._id} cours={c} />)}
      {
        localStorage.getItem('role') === 'Admin' &&
        <CardAdd onClick={<Link to='/addcourse'></Link>}></CardAdd>
      }
    </div> 
  </div>
    );
  }
