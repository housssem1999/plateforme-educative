import axios from 'axios';
import {Redirect} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './DashboardAdmin.css';

function DashboardAdmin() {
    const [users,setUsers] = useState([]);
    const [accept,setAccept] = useState("Accepter")
    const [refuse,setRefuse] = useState("Refuser")
    const config = {  
        baseURL: "http://localhost:5000",
        headers: {
          "Content-Type": "application/json"
        }
    }

    const handleDelete = async(id) =>{
        await axios.delete(`/api/users/${id}`,config);
        const newuser = users.filter((cc) => {
            return cc._id !== id;
    });
    setUsers(newuser);
}

    const handleTick = async (id) =>{
        await axios.put(`/api/users/${id}`,{etat:accept},config);
        const user = await axios.get('/api/users',config);
        setUsers(user.data);
        window.location = window.location
    }

    const handleExclu  = async (id) =>{
        await axios.put(`/api/users/${id}`,{etat:refuse},config);
        const user = await axios.get('/api/users',config);
        setUsers(user.data);
        window.location = window.location
    }

    useEffect(() => {
        const fetchUser = async() =>{
            const user = await axios.get('/api/users',config);
            setUsers(user.data);
        }
        fetchUser();
    },[])
    if(localStorage.getItem('role') === 'Admin')
        return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>TYPE</th>
                        <th>STATUS</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
                <tbody>
                    { users.filter((u)=>u.username !== localStorage.getItem('username')).map((u) =>{
                            return(

                                <tr key={u._id}>
                                    <td>{users.indexOf(u)+1}</td>
                                    <td>{u.nom}</td>
                                    <td>{u.role}</td>                                    
                                    <td>{u.etat}</td>
                                    <td>
                                        <div className="biton">
                                            <button className="btnnn" onClick={()=>handleDelete(u._id)}>Delete</button>
                                            <button className="btnnn"  onClick={()=>handleExclu(u._id)}><i className="fas fa-user-slash"></i></button>
                                            <button className="btnnn"  onClick={()=>handleTick(u._id)}><i className="fas fa-check"></i></button>
                                            
                                        </div>
                                    </td>
                                </tr>
                            )}
                    )}
                </tbody>
            </table>
        </div>);
        
    else{
        return(<Redirect to='/zzf' />);
    }        
    

}

export default DashboardAdmin
