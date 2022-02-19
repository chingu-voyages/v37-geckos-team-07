import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './layout/Home';
import Dashboard from './layout/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
