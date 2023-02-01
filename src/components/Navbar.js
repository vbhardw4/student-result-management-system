import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Courses from './Courses';
import Results from './Results';
import Students from './Students';
import Home from './Home';

const Navbar = () => {
  return (
    <Router>
      <nav >
        <ul className="menu-bar">
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/students">Students</Link></li>
          <li className="menu-item"><Link to="/courses">Courses</Link></li>
          <li className="menu-item"><Link to="/results">Results</Link></li>
          
        </ul>
      </nav>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/students" element={<Students/>}/>
          <Route exact path="/courses" element={<Courses/>}/>
          <Route path="/results" element={<Results/>}/>
        </Routes>
    </Router>
  );
};

export default Navbar;