import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
import button from './components/Button'
import Button from './components/Button';




function App() {


  return (
    <div className='app'>

      <h1 className="header">  Home</h1>
      <div className="main">
        <div className="card">
          <Card />
        </div>
      </div>

    </div>
  )


}

export default App;
