import React from 'react';
import csa from '../img/csa-cert.png'

const TeamMember = ({ data }) =>
  <div className="team-member">
      <div className="image-wrapper center-align">
        <div className="faces"><img className="responsive-img" src={ data.image } style={{ maxHeight: "150px", maxWidth: "150px" }}/></div>
      </div>
      <div className="content center-align">
        <h5> { data.name } </h5>
        <p style={{ fontStyle: `italic` }}> { data.title } </p>
        { data.csa !== "test" &&
        <a href = {data.csa} >
        <img className="responsive-img" src={csa} style={{ maxHeight: "150px", maxWidth: "150px" }} /> 
        </a>}
       	<p style={{ fontStyle: `italic` }}> { data.email } </p>
      </div>
  </div>


export default TeamMember;
