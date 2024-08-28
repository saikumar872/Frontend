import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/signuppage';
import SignIn from './components/signin';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Default route to open Signup page initially */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
