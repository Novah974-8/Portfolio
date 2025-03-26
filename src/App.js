import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Left from './component/left';
import Nav from './component/nav';
import About from './pages/About';
import CV from './pages/CV';
import Contact from './pages/Contact.jsx';
import Projet from './pages/Projet.jsx'
import Sae105 from './pages/Sae105.jsx'
import Sae102 from './pages/Sae102.jsx'
import Sae302 from './pages/Sae302.jsx'
import Sae303 from './pages/Sae303.jsx'
import Sae304 from './pages/Sae304.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="left">
          <Left/>
        </div>

        <div className="right">
          <Nav />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projets" element={<Projet/>} />
            <Route path="/projets/sae105" element={<Sae105/>} />
            <Route path="/projets/sae102" element={<Sae102/>} />
            <Route path="/projets/sae302" element={<Sae302/>} />
            <Route path="/projets/sae303" element={<Sae303/>} />
            <Route path="/projets/sae304" element={<Sae304/>} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;