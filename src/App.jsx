import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ContactForm from './pages/ContactForm';
import Home from './pages/Home';
import Layout from './components/Layout';
import LatestCategories from './pages/LatestCategories';
import ChooseGlobal from './components/ChooseGlobal';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="latest" element={<LatestCategories />} />
          <Route path="chooseglobal" element={<ChooseGlobal />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
