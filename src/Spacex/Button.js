
import React from 'react';

const Button  = React.memo((props)  =>{

    
    const handleOnClick = index => {
        props.getdata(index);
       
    };
    const activeclass = props.active === props.index ? 'active' : '';
    return (
        <button 
            onClick={() => handleOnClick(props.index)}
            className=  { `Button ${activeclass}` }
        >
            { props.children }
        </button>
    );
})

export default Button;
