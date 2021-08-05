import  React from 'react';
import {useState, useEffect } from "react";
import axios from "axios";
import './Login.css';

const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    useEffect(() => {
      if (localStorage.getItem("authToken")) {
        history.push("/");
      }
    }, [history]);
  
    const loginHandler = async (e) => {
      e.preventDefault();
  
      const config = {  
        baseURL: "http://localhost:5000",
        headers: {
          "Content-Type": "application/json"
        },
      };
  
      try {
        const { data } = await axios.post(
          "api/auth/login",
          { email, password },
          config
        );
  
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data.id);
        localStorage.setItem("role", data.role);
  
        history.push("/");
        window.location.reload();
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };
 
    return (
        <div className="login-screen">
          <form  className="login-screen__form" onSubmit={loginHandler}>
            <h3 className="login-screen__title">Login</h3>
            <div className="group">
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    required
                    id="email"
                    placeholder="Email address"
                    tabIndex={1}
                    size="35"
                    style={{padding:"4px"}}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                </div>
                <div className="form-group">
                <label htmlFor="password">
                    Password:{" "}
                </label>
                <input
                    type="password"
                    required
                    id="password"
                    autoComplete="true"
                    placeholder="Enter password"
                    tabIndex={2}
                    size="35"
                    style={{padding:"4px"}}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                </div>
                {error && <span className="error-message">{error}</span>}
            </div>
            <button type="submit" className="btn" >
              Login
            </button>
    
            <span className="login-screen__subtext">
              Don't have an account? 
            </span>
          </form>
        </div>
      );
    };
export default Login;