import React from 'react';

function Subtract(props){
    console.log(props);
    return <h2>Solution: {parseInt(props.num1)-parseInt(props.num2)}</h2>
}

export default Subtract