import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from "./components/Alert";
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(type, message)=>{

    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      
      setAlert(null);
    }, 1500);
  }

  const togglemode=() =>{

    if(mode === 'light'){

      setmode('dark');
      document.body.style.backgroundColor ='#393E46';
      document.body.style.color ='white';
      showAlert("Success","Dark mode Enabled Successfully");
    }

    else{

      setmode('light');
      document.body.style.backgroundColor ='white';
      document.body.style.color ='black';
      showAlert("Success","Light mode Enabled Successfully");
    
    }
  }
  return (
    <>
    <Alert alert={alert}></Alert>
    <Navbar title="TextUtils" mode={mode} togglemode= {togglemode} ></Navbar>
    <div className="container">
    <Textform heading="Type Text to Analyze Below"></Textform>
    {/* <About></About> */}
    </div>
    </>
  );
}

export default App;
