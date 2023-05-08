import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navbar from './components/Navbar';
import About from './containers/About';
import Resume from './containers/Resume';
import Home from './containers/Home';
import Skills from './containers/Skills';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import particles from './helper/utils.js/particles';

function App() {
  

  const handleInit = async (main) => {
    await loadFull(main);
  };

  

  return (
    <Router>
      <div className="App">
        <Particles id="particles" options={particles} init={handleInit} />
        <Navbar />
        <div className='App__main-page-content'>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;