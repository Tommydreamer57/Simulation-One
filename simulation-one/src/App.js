import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import router from './router'
import { NavLink } from 'react-router-dom';

const url = '/shelfie/';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="main-wrapper" >
          {router}
        </main>  
      </div>
    );
  }
}

export default App;
