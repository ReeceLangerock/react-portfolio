import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store, { history } from "./store/store";


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
            <Provider store={store}>

        <div className="App">
          <Navigation />
                    
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />



        </div>
        </Provider>

    );
  }
}

export default App;
