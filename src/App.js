import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
const[mode,setMode] = useState('light');
const[alert,setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(() => {
    setAlert(null);
  },1500);
}

//  const removeBodyClasses=()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-primary')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')
//   document.body.classList.remove('bg-warning')
//  }

  const toggleMode=()=>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title='TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title='TextUtils is Amazing Mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title='Insall TextUtils Now';  
      // }, 1500);
    }

    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled", "success");
      // document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word counter, character counter, Remove extra spaces" mode={mode}/>}/>
    </Routes> 
    
   </div>
    </Router>
    
    </>
  );
}
 
export default App;

