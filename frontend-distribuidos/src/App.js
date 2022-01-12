import React from 'react';
import './assets/css/App.css'
import Navbar from './components/shared/Navbar.js';
import Main from './Main.js'

function App() {
  return (
    

    
    <div className="App">
      <Navbar/>
      
      
      <div className="content-wrap">
        <Main/>
      </div> 
        

     
    </div>
  );
}

export default App;
