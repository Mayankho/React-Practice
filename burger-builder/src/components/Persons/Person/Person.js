import React from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../hoc/withClass';
import Aux from '../../../components/hoc/Auxilary';

// If not imported you will lose the card look.


class Person extends React.Component{
    constructor(props) {
        super(props);
        console.log('Peopl.js inside of construtctor()', props);
        this.inputElement = React.createRef();
      }
      componentWillMount() {
        console.log("People indside of component will mount()");
      }
    
      componentDidMount() {
        console.log('People is in component did mount()');
        if ( this.props.position === 0 ){
          this.inputElement.current.focus();
        }
        // This is going to focus it to the first one.
      }

      focus(){
        this.inputElement.current.focus();
      }
     

    render(){
        return (      
            <Aux>
               <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                ref= {this.inputElement}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>

               
        )
    }
}
Person.PropTypes = {
    click: PropTypes.func , 
    name: PropTypes.string  ,
    age: PropTypes.number , 
    changed: PropTypes.func
};
export default Person 