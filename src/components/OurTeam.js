import React from 'react';
import TeamMember from './TeamMember';
import { team } from './../config';

const OurTeam = () => {
  return (
    <section id="our-team" className="grey lighten-4">
      <div className="container">
        <h3 className="center-align">Our Team</h3>
        <div className="row center-align">
            { team.map((data, idx, { length } ) =>
              <div className={ `col m${length < 4 ? 12/length : '4'}`}  key={ idx }>
                  <TeamMember data={ data } key={ idx } />
              </div>)
            }
        </div>
      </div>
    </section>
  );
};


export default OurTeam;
