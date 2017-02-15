import React, { Component } from 'react';
import '../css/App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Palette from './Palette';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Palette />
      </div>
    );
  }
}

export default App;
