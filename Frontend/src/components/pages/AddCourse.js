import React from 'react';
import {useState} from 'react';
import axios from 'axios';

function AddCourse({history}) {

    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
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
          if(localStorage.getItem('role') === 'Admin') {
            const { data } = await axios.post('/api/courses', {titre, description, contenu, date, type}, config);
            history.push("/courses");
          }
        } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>titre</label>
                <input type='text'value={titre} onChange={(e)=>setTitre(e.target.value)}></input>

                <label>description</label>
                <input type='text'value={description} onChange={(e)=>setDescription(e.target.value)}></input>

                <label>contenu</label>
                <input type='text' value={contenu} onChange={(e)=>setContenu(e.target.value)}></input>

                <label>date</label>
                <input type='text' value={date}onChange={(e)=>setDate(e.target.value)}></input>

                <label>type</label>
                <input type='text' value={type} onChange={(e)=>setType(e.target.value)}></input>

            <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default AddCourse;