import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Button from './Button';

const Filter = React.memo((props) => {
  const [ launch_year, launch_yearClicked ] = useState();
  const [ launch_success, launch_successClicked ] = useState();
  const [ land_success, land_successClicked ] = useState();
  

  useEffect(() => {
      const params  = JSON.parse(localStorage.getItem('params')) ? 
        JSON.parse(localStorage.getItem('params')) :  {  limit: 100 } ;
      getSpacex(params);
      if( localStorage.getItem('params') ) {
        launch_yearClicked(JSON.parse(localStorage.getItem('params')).launch_year);
        launch_successClicked(JSON.parse(localStorage.getItem('params')).launch_success);
        land_successClicked(JSON.parse(localStorage.getItem('params')).land_success);
      }
     
  }, []);

  useEffect(() => {
    // setting the params
    let params = {
      launch_year,
      launch_success,
      land_success,
      limit: 100
    };
    localStorage.setItem('params', JSON.stringify(params));
    launch_year &&  getSpacex(params);
  }, [ launch_year, launch_success, land_success ]);


  const getSpacex = ( params  ) => {
    axios.get('https://api.spacexdata.com/v3/launches', {
      params
    })
    .then(function (res) {
      props.filterSpacexdata(res.data);
    })
  }
  const yearList = Array.from(Array(21).keys(), n => n + 2000)
    .map( (year , i) => <Button 
        key={i} 
        index = {year}
        active =  { launch_year }
        getdata = {() =>  launch_yearClicked(year) }>{year}
      </Button>);

  const launchList = [true, false]
    .map( b => <Button 
        key={b}
        index = {b} 
        active =  { launch_success }
        getdata = {() =>  launch_successClicked(b) }>{b.toString()}
      </Button>);

  const landList = [true, false]
    .map( b => <Button 
        key={b}
        index = {b}
        active =  { land_success }
        getdata = {() =>  land_successClicked(b) }>{b.toString()}
      </Button>);


  return (
    <aside className="Filter">
        <h3>Filters</h3>
        <h4> Launch Year </h4>
        <hr />
        <div className="launch">
          {yearList}  
        </div>  
        <h4> Successfully Launch </h4>
        <hr />
        <div className="launch">
          { launchList }
        </div> 
        <h4> Successfully Landing </h4>
        <hr />
        <div className="launch">
          { landList }
        </div> 
    </aside>
  );
})

export default Filter;
