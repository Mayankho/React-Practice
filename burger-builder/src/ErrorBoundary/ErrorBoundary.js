import React from 'react';

//This whole component is a higher order componont, 
// this will wrap around your component to check ifthere is a error 
class ErrorBoundary extends React.Component{
    state = {
        hasError: false,
        errorMessage: ''
    }

// This is sa method that recieves the error 
    componentDidCatch = (error, info) => {
        this.setState({hasError:true, errorMessage: error});
    }
    // This will only react when y=the component you wrap throws an error  

    render(){
        if(this.state.hhasError){
            return<h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children
        }
        // When your accessing props inside a class component use {this}
        //This component, will only render if there is an error 
        // This will have a, 
    }
}

export default ErrorBoundary;