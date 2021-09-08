import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/img-2.png';
import logouser from '../images/user.svg';
import profillogo from '../images/user (1).svg'
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
  const [dropdown, setDropdown] = useState(false);
  const classes = useStyles();

  const id =localStorage.getItem('id');
  const path =`/users/mycourses/${id}`;
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {setClick(false);setDropdown(false)};
  const Drop = () =>{setDropdown(!dropdown);}



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
            <button className='vv' onClick={Drop}  style={{backgroundColor:  dropdown ? '#242222' :  '#181414' }}>
                <img src={profillogo} alt="logo" className="logouser"></img>
            </button>
            </ul>
       </nav>
            {!username  ?
            (!dropdown ? <></> 
            :
            <div className="dropdown-menu" >
            <ul className="ul-menu">
              <li className='nav-links'  ><Link className='nav-links' to="/register" onClick={Drop}>Sign up  </Link></li><br></br>
              <li className='nav-links' ><Link className='nav-links' to="/login" onClick={Drop}>Login</Link></li>
            </ul> 
           </div>): 
             (!dropdown ? <></> :
             <div className="dropdown-menu" >
                <ul className="ul-menu">
                  <li className="bb">
                    <div>
                      <h2 style={{margin:"20px"}}>{username}</h2>
                    </div>
                    <div>
                      <img src={logouser} style={{margin:"20px"}}></img>
                      </div>
                  </li>
                  <li className='nav-links' ><Link className='nav-links'  onClick={Drop}>Profil</Link></li>
                  <li className='nav-links' ><Link className='nav-links' to={path}  onClick={Drop}>My Courses</Link></li>    
                  <li className='nav-links' onClick={()=>{ localStorage.clear();window.location.reload();}}><Link onClick={Drop} className='nav-links' to='/'>Deconnect</Link></li>
                </ul> 
             </div>)}
          
        
        
      
      <PopupSignup title="S'inscrire dès maintenant" className={classes.titre} openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <StudentForm/>
      </PopupSignup>
    </>
  );
}

export default Navbar;
/*    <li className="nav-item dropdown" >
            <a href={'/'} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" 
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Category
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                <NavLink  className="dropdown-item" to='/home/all' activeClassName="active-categoryMenu" >All Courses</NavLink>
                <NavLink className="dropdown-item" to='/home/Web Development' activeClassName="active-categoryMenu">Web Development </NavLink>
                <NavLink className="dropdown-item" to='/home/Web Designing' activeClassName="active-categoryMenu" >Web Designing </NavLink>
                <NavLink className="dropdown-item" to='/home/React' activeClassName="active-categoryMenu">React</NavLink>
                <NavLink className="dropdown-item" to='/home/NodeJs' activeClassName="active-categoryMenu">NodeJs</NavLink>
                <NavLink className="dropdown-item" to='/home/ML' activeClassName="active-categoryMenu">Machine Learning </NavLink>
                <NavLink className="dropdown-item" to='/home/Photography' activeClassName="active-categoryMenu">Photography</NavLink>
                <NavLink className="dropdown-item" to='/home/IOT' activeClassName="active-categoryMenu">IOT </NavLink>


           
            </div>
        </li>
    </ul>*/