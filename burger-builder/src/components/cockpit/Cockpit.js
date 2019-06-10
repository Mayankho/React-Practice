import React from 'react';
import classes from './Cockpit.css';
import Aux from '../hoc/Auxilary';

const cockpit = (props) => {

    // Use more function comonens  they cant mangae state bt are very very needed
    // You can not manage state in every single comppnonents, And use the class based componetns less if possibee
    //This is going to be used with stateless or statfeul component.

    const assignedClasses = [];
    let btnClass = classes.Button;
    btnClass = [classes.red, classes.Red].join(' '); 

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (

      <Aux>
        <h1>{props.appTitle}</h1>
            {console.log(props)};
          <p className={assignedClasses.join( ' ' )}>This is really working!</p> 
          <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log In</button>
      </Aux>
    );
};
export default cockpit;