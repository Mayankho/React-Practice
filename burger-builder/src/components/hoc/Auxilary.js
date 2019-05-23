import React from 'react';


const aux = (props) => props.children;


export default aux


// This is a higher order component, Will be a component that wrap around .
// Why do we return props children?, 
//So this is wrapping another component, and it's outputting it with props.children.
// So by wrapping it with the higher order component, you can move and direct the funtio n to the return.
// They can share logic between cpmponents


