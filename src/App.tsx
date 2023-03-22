import React from 'react';
import './App.css';
import Admin from './components/Admin/Admin';
import Home from './components/Employee/Home';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Home/>
      {/* <Admin/> */}
    </div>
  );
}

export default App;
