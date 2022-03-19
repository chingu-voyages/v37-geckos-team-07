import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './layout/Home';
import Dashboard from './layout/Dashboard';
import SignupPage from './layout/SignupPage';
import LoginPage from './layout/LoginPage';
import NotFoundPage from './layout/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Landing from './layout/Landing';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

<Route exact path="dashboard" element={<PrivateRoute />}>
  <Route exact path="/" element={<Home />} />
</Route>;

// - Added 404 page
// - Added Login-Signup form
// - Added Landing page (content TBD?)
// - Implemented minor styling fixes
