import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesignDeclares from './components/DesignDeclares';
import About from './pages/About';
import BreakDown from './pages/BreakDown';
import ContactForm from './pages/ContactForm';
import Home from './pages/Home';
import Layout from './components/Layout';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="designdeclares" element={< DesignDeclares/>} />
          <Route path="about" element={< About/>} />
          <Route path="contact" element={< ContactForm/>} />
          <Route path="breakdown" element={< BreakDown/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
