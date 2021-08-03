import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CourseSearch = ()=> {
 
  const [term, setTerm] = useState('');
  const [cours,setCours] = useState([]);
  const config = {  
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json"
    }
}

    const handleInputChange = async (e) => {
    const term = e.target.value;
    setTerm(term);

    if(term.length < 1) {
        setCours([]);
      return;
    }
    const newCours = await axios.get(`/api/course?term=${term}`,config);
    setCours(newCours.data);    
  }

return (
    <div className="row"> 
        <div className="col "> 
            <div className="card"> 
                <div className="card-content"> 
                    <div className="input-field"> 
                        <input type="text" placeholder="Recherche des cours" value={term} onChange={e => handleInputChange(e)} /> 
                    </div> 
                        <div className='collection'>
                        {cours.map((cc) => (
                            <div className="search">
                                <div key={cc._id} to={`/course/${cc._id}`} className="collection-item">{cc.titre}
                                </div>
                            </div>))
                        }
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
  );
}
 
export default CourseSearch;