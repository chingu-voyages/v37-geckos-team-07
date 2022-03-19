import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingComponent from './components/Loading';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { getLoggedIn, logout } from './services/auth';
import routes from './config/routes';
import * as USER_HELPERS from './utils/userToken';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error('Logout was unsuccessful: ', res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={user} />
      <main>
        <Routes>
          {routes({ user, authenticate, handleLogout }).map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// - Added 404 page
// - Added Login-Signup form
// - Added Landing page (content TBD?)
// - Implemented minor styling fixes
// <Route index element={<Landing />} />
//           <Route path="landing" element={<Landing />} />
//           <Route path="/home" element={<Home />} />

//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/login" element={<LoginPage />} />

//           <Route path="*" element={<NotFoundPage />} />
