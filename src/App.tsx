import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom' 
import { SignUp } from './components/Authentication/SignUp';
import { Login } from './components/Authentication/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='sign_up' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
