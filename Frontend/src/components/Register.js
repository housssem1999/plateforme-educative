import React from 'react';
import {useState} from 'react';import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = ({ history }) => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [tel, setTel] = useState(0);
    const [niveau, setNiveau] = useState(0);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const types = ['Apprenant', 'Coach'];

    const selectType = (type, e) => {
      const check = e.target.checked
      if(check) {
        setRole(type)
      }
    }

    const registerHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      if (password !== confirmpassword) {
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          setError("");
        }, 5000);
        return setError("Passwords do not match");
      }
  
      try {
        const { data } = await axios.post(
          "/api/auth/register",
          { username, role, email, password, nom, prenom, tel, niveau }, config );
          history.push("/");

        } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 5000);
      }
    };

    return (
      <div className="register-screen">
        <form onSubmit={registerHandler} className="register-screen__form">
          <h3 className="register-screen__title">Register</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form-group1">
              <label htmlFor="name">First name:</label>
              <input
                type="text"
                required
                id="nom"
                placeholder="Enter name"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="name">Last name:</label>
              <input
                type="text"
                required
                id="prenom"
                placeholder="Enter last name"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="name">Tel:</label>
              <input
                type="text"
                required
                id="tel"
                placeholder="00 000 000"
                value={tel}
                onChange={(e) => setTel(Number(e.target.value))}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="name">Username:</label>
              <input
                type="text"
                required
                id="name"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                required
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                required
                id="password"
                autoComplete="true"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="confirmpassword">Confirm Password:</label>
              <input
                type="password"
                required
                id="confirmpassword"
                autoComplete="true"
                placeholder="Confirm password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="level">Level:</label>
              <input
                type="text"
                required
                id="niveau"
                placeholder="Enter Level"
                value={niveau}
                onChange={(e) => setNiveau(Number(e.target.value))}
              />
            </div>
            <div className="form-group1">
              <label htmlFor="role" style={{marginBottom: '15px'}}>Types:</label>
                  {types.map(type => (
                      <div key={type} style={{marginBottom: '15px'}}>
                          <input id={type} type="radio" name="role" value={type} onChange={e => selectType(type, e)}></input>
                               {type}
                      </div>
                ))}
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button><span className="register-screen__subtext">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    );
}

export default Register