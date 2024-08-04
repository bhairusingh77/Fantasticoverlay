import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Plugins from './pages/Plugins';
import AboutUs from './pages/AboutUs';
import PluginDetail from './pages/PluginDetail';
import './App.css'; // Import your CSS file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS
AOS.init({
  duration: 1000, // Duration of animations
  offset: 200,    // Offset from the viewport top
  once: true,     // Animate only once
});

function App() {
  return (
    <Router>
      <PageTransitions />
    </Router>
  );
}

function PageTransitions() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <div className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/plugins" element={<Plugins />} />
            <Route path="/plugins/:id" element={<PluginDetail />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
