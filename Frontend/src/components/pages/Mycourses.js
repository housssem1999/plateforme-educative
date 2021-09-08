import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardCourse from '../CardCourse';
import './Mycourses.css';

function Mycourses() {

    const [mycourses , setMycourses] = useState([]);
    const iduser = localStorage.getItem('id');
    const config = {  
        baseURL: "http://localhost:5000",
        headers: {
          "Content-Type": "application/json"
        }
      }
      const deleteCours = async (id) => {
        await axios.delete(`/api/courses/${id}`,config);
        const newCours = mycourses.filter((cc) => {
          return cc._id !== id;
        });
        
        setMycourses(newCours);
      };

      const com = async (id) => {
       console.log(`com${id}`);
      };
     useEffect(()=>{
         const fetch = async (id) =>{
             const res = await axios.get(`api/users/mycourses/${id}`,config);
             console.log(res.data);
             setMycourses(res.data); 
             console.log("after mont :",mycourses);            
        }
        fetch(iduser);
     },[])
     console.log("current  :",mycourses)  
    return (
        <div className="page">
            <div className="title">
                <h1>My courses </h1>
            </div>
            <div className="roww">
            
            {mycourses.map((c)=>
               <CardCourse clickHandler={com} clickHandler={deleteCours}  className="row" key={c._id} cours={c} />)}
            </div>        
        </div>
    )
}

export default Mycourses
