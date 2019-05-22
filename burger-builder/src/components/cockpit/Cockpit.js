import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    // Use more functionsa comonens  they cant mangae state bt are very very needed
    // You can not manage state in every single comppnonents, And use the class based componetns less if possibee
    //This is going to be use d twith statelsees or statfeul conmenet 

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
        <div className = {classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            {console.log(props)};
        
          <p className={assignedClasses.join( ' ' )}>This is really working!</p> 
          <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};
// Cannot return multiple elements without a root node.
// --> If, the similar, Test, JS, Have time.
// Panorama

export default cockpit;