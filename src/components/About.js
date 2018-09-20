import React from 'react';
import serverless from '../img/serverless.png';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col l1"></div>
            <div className="col l10 center-align">
            <h1>About Us</h1>
            <p>
            Peregrine Cloud Solutions started when our founders first migrated a project to the cloud and saw the immediate benefits it provided for cost and performance. 
            We offer services to help our clients optomize cost by utilizing serverless architectures for future solutions and migrating existing solutions to the cloud.
              <br/>
            </p>
            <img className="responsive-img" src={serverless} /> 
            <p>
            <br/>
            We believe the future is serverless and big jobs such setting up datapipelines and hosting websites will persist moving towards containerized microservices and serverless architectures.
            This website was built using React and deployed to serverless infastructure on AWS S3 utilizing Lamdda functions and Dynamo DB for data processing. 
            This is an extremely efficient and cost effective architecture that showcases the cutting edge cloud technology our team can bring to your business.
            </p>
          </div>
          <div className="col l1"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
