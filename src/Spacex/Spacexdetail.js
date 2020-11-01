import React from 'react';

const Spacexdetail = ( { detail } ) =>  {
    const landflag =  detail.rocket.first_stage.cores[0].land_success !== null ;
    let detailTag = (<article> 
        <div className="mission_patch"> 
            <img src={detail.links.mission_patch_small} alt = { detail.mission_name }/>
        </div>
        <h3>{detail.mission_name}</h3>
        <div className="Missions">Mission IDS:
            <ul> 
                {detail.mission_id.map(  id => {
                    return <li key={id}>{id}</li>
                })}
            </ul>
        </div> 
        
        <p>Launch Year: <span>{detail.launch_year}</span></p>
        <p>Successful Launch: <span>{detail.launch_success.toString()}</span></p>
            { landflag &&  <p>Successful Land: {detail.rocket.first_stage.cores[0].land_success.toString()}
            </p>   }
           
    </article>);
    return (landflag  && JSON.parse(localStorage.getItem('params')).land_success ===  detail.rocket.first_stage.cores[0].land_success) && detailTag;
}

export default Spacexdetail;
