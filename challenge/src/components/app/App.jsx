import './App.css';
import React from 'react';
import Header from '../header/header.jsx';


function App() {
  const [stateDark , setStateDark] = React.useState(true);
  return (
    <div>
      {
        stateDark 
        ? 
        <div className="App">
          <Header/>
        </div>
        : 
        <div className="App">
          <h1>Dark</h1>
        </div>
      }
    </div>
  );
}

export default App;
