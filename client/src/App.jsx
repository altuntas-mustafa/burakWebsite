
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/Pages';


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
