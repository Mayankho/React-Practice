import React from 'react';


class ErrorBoundary extends React.Component{
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError:true, errorMessage: error});
    }

    render(){
        if(this.state.hhasError){
            return<h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;