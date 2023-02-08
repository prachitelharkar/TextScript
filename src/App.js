import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
function App() {

  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
   setTimeout( ()=> {
    setAlert(null);
   }, 1500);
  }
  
  return (
    <>
    <Navbar title="TextScript" />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading=" Enter the text to analyze below"/>
    
    </div>
    </>
    
  );
}

export default App;
