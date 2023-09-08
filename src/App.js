
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import NavgationBar from './components/Navbar';
import Alert from './components/Alert';
import React from 'react';

function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]= useState(null);
  const promptAlert=(message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      promptAlert(" Dark mode is enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      promptAlert(" Light mode is enabled","success")
    }
  }
  return (
    <>
      <NavgationBar title="Name" firstPage="Home" secondPage="About" thirdPage="Contact" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Form title="Enter text to convert to UPPERCASE" mode={mode} promptAlert={promptAlert}/>
    </>
  );
}
export default App;

