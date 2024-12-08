import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import League from './components/League';
import React, { useState } from 'react';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Navbar */}
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 min-h-screen${
            collapsed ? '' : ''
          } p-8`}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/league" element={<League />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;