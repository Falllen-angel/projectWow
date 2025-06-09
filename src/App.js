import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
