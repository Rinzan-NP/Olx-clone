import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthContext, FirebaseContext,Post} from './store/FirebaseContext';

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>̥̥
      <Router>
        <Post>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create' element={<Create />} />
          <Route path='/view' element={<View />} />
        </Routes>
        </Post>
      </Router>
    </div>
  );
}

export default App;