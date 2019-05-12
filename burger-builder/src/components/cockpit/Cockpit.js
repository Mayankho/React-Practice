import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';
    btnClass = classes.red;

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }


    return (
        <div className = {classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join( ' ' )}>This is really working!</p> 
          <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};
// cannot return multiple elements without a root node.

export default cockpit;