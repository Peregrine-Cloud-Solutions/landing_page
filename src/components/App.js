import React, { Component } from 'react';

import AsyncComponent from '../hocs/AsyncComponent'
import Navbar from './Navbar';
import About from './About';
import Services from './Services'
import Modal from './Modal'
const Hero = AsyncComponent(() => import('./Hero'), { height: '680px' });
const Footer = AsyncComponent(() => import('./Footer'));


const HTML = document.documentElement


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      show: false
    }
  }

  openModal = () => {
    console.log("In OpenModal")
    this.setState({
      show: true
    })
  }

  closeModal = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return <div id="app" >
      <Navbar />
      <Hero openModal = {this.openModal} />
      { this.state.show ?
      <Modal closeModal = {this.closeModal} show={this.state.show}/> :
        null }
      <About />
      <Services />
      <Footer />

    </div>
  }
};

export default App;
