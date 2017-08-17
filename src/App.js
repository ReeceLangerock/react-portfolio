import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

//import components
import Navigation from "./components/navigation/FloatingNavigation";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
                    
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />



        </div>
      </BrowserRouter>
    );
  }
}

export default App;
