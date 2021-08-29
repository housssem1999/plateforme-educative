import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import './AddCourse.css'

function AddCourse({history}) {

    const [titre, setTitre] = useState("");
    const [title, setTitle] = useState("");
    const [comp, setComp] = useState(0);
    const [ length, setLength] = useState(1);
    const [ file, setFile] = useState();
    const [ description, setDescription] = useState("");
    const [contenu, setContenu] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
                
        const config = {
            baseURL: "http://localhost:5000",
            headers: {
              "Content-Type": "application/json"
            }
        };
      
        try {

            const { data } = await axios.post('/api/courses', {titre, description,contenu, date, type}, config);
            history.push("/courses");
        } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
    };
    const SubmitFile = async(e) =>{

      e.preventDefault();
      setComp(comp => comp + 1);
      setTitle( titre + " " + i.toString());
      const datat = new FormData();
      datat.append('file',file);
      datat.append('title',title)
                  
      const res = await axios.post('/api/upload', datat, {
        baseURL: "http://localhost:5000",
        headers: {
          'Content-Type': 'multipart/form-data'
        }});
    }
    const items = [] 
    for(var i=0;i<length;i++){
      items.push(<div className="inpt">
                  <label>file</label>
                  <input type='file' name="file" required  onChange={(e)=>setFile(e.target.files[0])}></input>
                  <button className="fileBtn" onClick={SubmitFile} >SubmitFile</button>
                </div>)}

    return (
        <div className="container">
            <form className="form-group" onSubmit={handleSubmit} encType="multipart/form-data">
              <h3 className="titre">Add Course</h3>
              <div className="form-box">  
                <div className="inpt"><label>titre</label>
                  <input type='text'value={titre}  
                    required
                    placeholder="Titre"
                    tabIndex={1}
                    size="35"
                    onChange={(e)=>setTitre(e.target.value)}></input>
                </div>

                <div className="inpt">
                  <label>description</label>
                  <input type='text' name="description"  
                    required
                    placeholder="Description"
                    tabIndex={1}
                    size="35" onChange={(e)=>setDescription(e.target.value)}></input>
                </div>
                
                <div className="inpt">
                  <label>contenu</label>
                  <input type='text' value={contenu} 
                    required
                    placeholder="Contenu"
                    tabIndex={1}
                    size="35" onChange={(e)=>setContenu(e.target.value)}></input>
                </div>
                                             
                <div className="inpt">
                  <label>type</label>
                  <input type='text' value={type}
                  required
                  placeholder="Type"
                  tabIndex={1}
                  size="35" onChange={(e)=>setType(e.target.value)}></input>
                </div>
                
                <div className="inpt">
                  <label>date</label>
                  <input type='date' value={date} 
                    required
                    placeholder="Date"
                    tabIndex={1}
                    onChange={(e)=>setDate(e.target.value)}></input>
                </div>
                
                <div className="inpt">
                  <label htmlFor="lengthOfModule">length of module :</label>
                  <input type="number" value={length} 
                   onChange={(e)=> setLength(e.target.value)} min="1" max="30"></input>
                </div>

                {items}
              </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default AddCourse;