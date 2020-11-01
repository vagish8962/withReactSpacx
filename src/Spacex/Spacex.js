import React, { useState } from 'react';

import Filter from './Filter';
import Spacexlist from './Spacexlist'
import Hoc from './Hoc'


function Spacex() {
  const [ SpacexDate, getSpacexdata ] = useState();
  return (
    <Hoc>
      <div className="Spacex">
          <Filter filterSpacexdata = { getSpacexdata } />
          { SpacexDate  &&  
              <section className="Spacexlist">
                { SpacexDate.length  ?
                  <Spacexlist showSpacexdata = { SpacexDate } /> : <p className="norecord">No Record</p> }
              </section>}
      </div>
      <footer>
        <p className="text_center"> <b> Developed by:</b> Vagish Gupta</p>
      </footer>
    </Hoc>
    );
}

export default Spacex;
