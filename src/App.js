import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');//Wether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
  
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-darkmode';
      setInterval(()=>{
        document.title='TextUtils is Amazing Mode';
      },2000);
      setInterval(()=>{
        document.title='Install TextUtils ';
      },1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-lightmode'
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <TextForm showAlert={showAlert} heading="Enter text" mode={mode} />
      </div>
      {/* <Routes> */}
           {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={ */}
            {/* <TextForm showAlert={showAlert} heading="Enter text" mode={mode} /> */}
            {/* // } /> */}
        {/* // </Routes> */}
      {/* <About /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
