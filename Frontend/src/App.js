import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Courses from './components/pages/Courses';
import ContactUs from './components/pages/ContactUs';
import PageNotFound from './components/pages/PageNotFound';
import Login from './components/pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import AddCourse from './components/pages/AddCourse';
import DashboardAdmin from './components/pages/DashboardAdmin';

function App() {
  return (
    <Router>
      <div className="all">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <PrivateRoute exact path="/courses" component={Courses} />
          <Route path='/addcourse' exact component={AddCourse} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/about' component={About} />
          <Route path='/courses' component={Courses} />
          <Route path='/admin' component={DashboardAdmin} />
          <Route path='/contact' component={ContactUs} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
