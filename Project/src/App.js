import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Course from './components/pages/Course';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import PageNotFound from './components/pages/PageNotFound';



function App() {
  return (
    <Router>
      <div className="all">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/cours' component={Course} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route component={PageNotFound}/>
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;
