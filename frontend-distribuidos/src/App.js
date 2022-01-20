import React from 'react';
import './assets/css/App.css'
import Navbar from './components/shared/Navbar.js';
import Terremotos from './components/shared/Terremotos.js';
import Estadisticos from './components/shared/Estadisticos.js';

function App() {
  return (
    

    
    <div className="App">
      
      
      
      <div className="content-wrap">
        <Estadisticos/>
      </div> 

      <div>
        <Terremotos/>
      </div>
        

     
    </div>
  );
}

export default App;
