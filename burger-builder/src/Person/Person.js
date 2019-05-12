import React from 'react';

import classes from './Person.css';
// If not imported you will lose the card look.

const person = ( props ) => {
//  If you wanted to throw an error message you would throw it here.
    return (      
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;