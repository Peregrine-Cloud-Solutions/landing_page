import React, { Component } from 'react';

// import About from './About';
// import Services from './Services';
// import Contact from './Contact';
// import SocialBrand from './SocialBrand';

import AsyncComponent from '../hocs/AsyncComponent'

const Navbar = AsyncComponent(() => import('./Navbar'));
const Hero = AsyncComponent(() => import('./Hero'), { height: '680px' });
//const OurTeam = AsyncComponent(() => import('./OurTeam'));
const About = AsyncComponent(() => import('./About'));
const Services = AsyncComponent(() => import('./Services'));
const Quote = AsyncComponent(() => import('./Quote'));
const Footer = AsyncComponent(() => import('./Footer'));

const HTML = document.documentElement



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  
  render() {
    return <div id="app" >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Quote />
      <Footer />
    </div>
  }
};

export default App;
