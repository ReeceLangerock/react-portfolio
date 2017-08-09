import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'

//import components
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navigation/>
        <section id = "section__hero">
        <Hero/>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
          <h1> TEST</h1>
        </section>
        <section id = "section__footer">
        <Footer/>

        <div id ="test"><h1>testerrrr</h1></div>
          </section >
          <div></div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
