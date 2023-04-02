
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/Authentication/signIn/SignIn';
import Home from './components/Employee/Home';
import Admin from './components/Admin/Admin';
import SignUp from './components/Admin/signUp/SignUp';

function App() {

  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
