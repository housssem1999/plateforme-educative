import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardCourse from '../CardCourse';
import './Courses.css'
import '../../App.css';
import CardAdd from './CardAdd';
import { Link } from '@material-ui/core';

 
export default function Courses(props) {
  const [cours,setCours] = useState([]);
  const config = {  
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json"
    }
  }
  const deleteCours = async (id) => {
    console.log("imchi ");
      await axios.delete(`/api/courses/${id}`,config);
      const newCours = cours.filter((cc) => {
        return cc._id !== id;
      });
      
      setCours(newCours);
    };

  useEffect(()=>{
    const fetchData = async()=>{
        const res= await axios.get('/api/courses',config)
        setCours(res.data)  
    }
    fetchData()
    
  },[])
  
  return (
    <div className="contenair">
      {cours.map((c)=>
      <CardCourse clickHandler={deleteCours} className="row" key={c._id} cours={c} />)}
      {
        localStorage.getItem('role') === 'Admin' &&
        <CardAdd onClick={<Link to='/addcourse'></Link>}></CardAdd>
      }
    </div> 
    );
  }
