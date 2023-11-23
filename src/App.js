import React from 'react';
import './App.css';
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;