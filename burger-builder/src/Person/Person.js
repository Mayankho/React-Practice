import React from 'react';
import './Person.css';

const person = (props) => {
  
    return (
        <div className = "Person" >
            <p onClick = {props.click}> I am {props.name} and i am {props.age} years old!</p> 
            <p>{props.children}</p>
            <input type ='text' onChange = {props.changed} value = {props.name}/>
        </div>
        
        //Children refers to any elements between open and closing tages in JSX elements

    )
    
    //This return is turned into react create element, thats why we import react!
};

export default person;