import React from 'react';

import classes from './Person.css';
// If not imported you will lose the card look.


class Person extends React.Component{
    constructor(props) {
        super(props);
        console.log('Peopl.js inside of construtctor()', props)
        this.state = {
          persons: [
            { id: 'asfa1', name: 'Max', age: 28 },
            { id: 'vasdf1', name: 'Manu', age: 29 },
            { id: 'asdf11', name: 'Stephanie', age: 26 }
          ],
          otherState: 'some other value',
          showPersons: false
        }
      }
      componentWillMount() {
        console.log("People indside of component will mount()");
      }
    
      componentDidMount() {
        console.log('People is in component did mount()');
      }
    render(){
        return (      
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
        // You can not return arrays, 
    }
}
export default Person;