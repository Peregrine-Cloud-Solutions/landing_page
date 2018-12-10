import React from 'react';

const Services = () => {
  return (
    <section id="services" className="grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col m3"></div>
          <div className="col m6 center-align">
            <h2>Services</h2>
          <p>We deliver high quality and low cost serverless application solutions as well as DevOps services to help you move and deploy your existing applications in the Cloud.</p>
          </div>
          <div className="col m3"></div>
        </div>
        <div className="row">
          <div className="col m3">
            <i className="material-icons">build</i>
            <h5>Custom Built Applications</h5>
            <p>We utilize our knowledge of the cloud to design the most scalable and cost efficient solutions for our customers.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">swap_vertical_circle</i>
            <h5>Cloud Migration Services</h5>
            <p>We can migrate your existing applications to the cloud saving you money and enabling you to scale.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">alarm</i>
            <h5>Timely Support</h5>
            <p>Our highly available support team can fix issues, answer client questions, and provide training documentation.</p>
          </div>
          <div className="col m3">
            <i className="material-icons">mood</i>
            <h5>Customer Success</h5>
            <p>For all our projects we offer up services to monitor and support our clients implementations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
