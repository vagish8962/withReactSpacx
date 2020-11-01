import React from 'react';

import Spacexdetail from './Spacexdetail';

const Spacexlist = props =>  props.showSpacexdata
  .map( detail => <Spacexdetail key = { detail.flight_number } detail = { detail}/>);


export default Spacexlist;
