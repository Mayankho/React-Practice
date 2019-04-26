import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and i am {props.age} years old!</p> 
            <p>{props.children}</p>
        </div>
        
        //Children refers to any elements between open and closing tages in JSX elements

    )
    
    //This return is turned into react create element, thats why we import react!
};

export default person