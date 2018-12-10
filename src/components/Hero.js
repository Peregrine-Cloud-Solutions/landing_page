import React from 'react';
import clouds from '../img/clouds.jpg';

const Hero = ({ openModal }) => {
  return (
    <section
      id="hero"
      className="blue lighten-1"
      style={{ backgroundImage: `url(${clouds})`}}
    >
      <div className="container valign-wrapper jc-center">
        <div style={{ textShadow: '1px 1px black' }} className="valign center-align white-text">
          <h3  >
            Cloud Experts
          </h3>

          <p className="big">
            Save money and scale seamlessly
            <br/>
            Build your company's assets on the cloud
          </p>

          <a onClick={openModal} style={{ textShadow: '0px 0px' }} className="btn waves-light waves-effect m-r-16 blue lighten-1">
            Get A Quote!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
