import  React from 'react';


const withClass = (props) => (

    <div className={props.classes}>
        {props.children}
    </div>

);
// 1. We are expecting to get classes, as a property.  
// 2.  We recieve props classes and then output childresn
//  This will control, the classes on all my div's, Not eqt

export default withClass;
