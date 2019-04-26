import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Yankho', age: 22},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = () => {
    //console.log('was clicked!');
    //this.state.persons[0].name = 'Mayankho';
    this.setState({persons :[
      {name: 'Max', age: 28},
      {name: 'Yankho', age: 22},
      {name: 'Stephanie', age: 29}
    ]})
  }

  render() {
    return (
      <div className="App">
      <h1>My react app!</h1>
      <p>:This is really working oh my god!!</p>
      <button onClick= {this.switchNameHandler}>Switch Name</button>
      <Person name ={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name ={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies is fishing</Person>
      <Person name ={this.state.persons[2].name} age={this.state.persons[2].age} />
      
         </div>
    );
      // All elements that are lower case are resered for the native javascript variables
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi , im a react app!!!'))
   }
}


export default App;
