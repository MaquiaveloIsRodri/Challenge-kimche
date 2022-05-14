import './App.css';
import React from 'react';
import Header from '../header/header.jsx';
import Main from '../main/main';
import {StateContext} from '../../context/context.js';

function App() {
  return (
    <StateContext>
      <div>
        <Header />
        <Main/>
      </div>
    </StateContext>
  );
}

export default App;
