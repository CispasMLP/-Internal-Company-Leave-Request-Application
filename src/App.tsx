
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/Admin/signUp/SignUp';
import SignIn from './components/Authentication/signIn/SignIn';
import Home from './components/Employee/Home';
import Admin from './components/Admin/Admin';;

function App() {

  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/admin" element={<Admin/>}/>
        {/* <Route path="/home" element={<Home/>}/> */}
      </Routes>
      <Home/>
    </div>
  );
}

export default App;


{/* <Login/>

<div>
  <ul>
  {list.map(d=><li>{d}</li>)}
  </ul>
</div> */}
