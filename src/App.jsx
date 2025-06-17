import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesignDeclares from './components/DesignDeclares';
import About from './components/About';
import BreakDown from './pages/BreakDown';
import ContactForm from './components/ContactForm';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designdeclares" element={< DesignDeclares/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/contact" element={< ContactForm/>} />
        <Route path="/breakdown" element={< BreakDown/>} />
      </Routes>
    </Router>
  );
};

export default App;
