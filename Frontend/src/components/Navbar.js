import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/img-2.png';
import './Navbar.css';
import PopupSignup from './PopupSignup';
import StudentForm from './StudentForm';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  titre: {
    textAlign: "center"
  }
}));

function Navbar() {

  const username = localStorage.getItem('username');
  const [openPopup,setOpenPopup] =useState(false);
  const [click, setClick] = useState(false);
  const classes = useStyles();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar bg-transparentv">
       
      
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img alt="logo" className="logo" src={logo}></img>
        </Link>
          
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className='nav-item'
            
            >
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
              
            </li>
            <li className='nav-item'>
              <Link
                to='/courses'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cours
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact 
              </Link>
            </li>
            <li className='nav-item'>
            {!username ?
            <button className='nav-links'  style={{color:"black",textDecoration:"none"}}><a href="/register"style={{color:"black",textDecoration:"none"}}>Sign up  </a></button>
             : <button className='nav-links'style={{color:"black"}} onClick={()=>{ localStorage.clear();window.location.reload();}}>Deconnect</button> }
            
            </li>
          </ul>
        
        
      </nav>
      <PopupSignup title="S'inscrire dès maintenant" className={classes.titre} openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <StudentForm/>
      </PopupSignup>
    </>
  );
}

export default Navbar;
