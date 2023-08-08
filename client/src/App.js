
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';
import Navbar from './components/Navbar';


function App() {
  return (<>
 
    <div className="App">
      <BrowserRouter>
      <Pages />
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
