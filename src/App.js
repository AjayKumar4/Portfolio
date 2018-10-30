import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

import './App.css';
//import './App.scss';
//import './main.scss';

import NavBar from './components/navbar';
import Home from './components/landing_page';
//import Work from './components/work';
import About from './components/about';
import Skills from './components/skills';
//import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  /*render() {
    return (
      <div className="portfolio">
        <NavBar/>
        <Home/>
		<About/>
		<Skills/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
    );
  }*/
  render() {
    return (
      <div className="portfolio">
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
      </div>
    );
  }
}

export default App;
