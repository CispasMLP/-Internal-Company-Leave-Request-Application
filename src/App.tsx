
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/Admin/signUp/SignUp';
import SignIn from './components/Authentication/signIn/SignIn';
import Home from './components/Employee/Home';
import Admin from './components/Admin/Admin';
import { useContext } from 'react';
import { TodoContextType, TodoContext } from './components/Context/UserContext';

function App() {
 const {list, addToList,update, removeItem}= useContext(TodoContext) as TodoContextType;



  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
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
