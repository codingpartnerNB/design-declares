import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import DesignDeclares from './components/DesignDeclares';
import About from './components/About';
import BreakDown from './pages/BreakDown';
import ContactForm from './components/ContactForm';
import Signatories from './pages/Signatories';
import GlobalSupporters from './pages/GlobalSupporter';
import Footer from './pages/Footer';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designdeclares" element={< DesignDeclares/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/contact" element={< ContactForm/>} />
        
        <Route path="/513" element={< Signatories/>} />
        <Route path="/breakdown" element={< BreakDown/>} />
        <Route path="/global" element={< GlobalSupporters/>} />
        <Route path="/footer" element={< Footer/>} />
    
        
      </Routes>
    </Router>
  );
};

export default App;
