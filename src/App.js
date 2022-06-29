import React from 'react';

import { Footer, Features, Header, AboutUs, Honorary, Human, Blog, Events } from './containers';
import { Brand, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div className='navbar-fixed '>
    <Navbar />
    </div>
    <div className="gradient__bg">
      <Header />
    </div>
    <Brand />
    <AboutUs />
    <Features />
    <Honorary />
    <Human />
    <Blog />
    <Events />
    <Footer />
  </div>
);

export default App;
