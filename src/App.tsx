import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom' 
import { SignUp } from './components/Authentication/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='sign_up' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
