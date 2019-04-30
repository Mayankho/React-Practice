import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Yankho', age: 22 },
      { name: 'Stephanie', age: 26 }
    ],

    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { id : 'jkjs',name: 'Maxy', age: 28 },
        { id : 'ljsdfkhdfk',name: event.target.value, age: 22 },
        { id : 'jhfeiyrkdjie',name: 'Stephiepoo', age: 29 }
      ]
    })

  }

  deletPersonHandler = (personIndex) => {

    // const persons = this.state.persons.slice(); //This is only holding a pointer, did not set a new value, 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // This removes one element forom the array
    this.setState({persons : persons})// This was the one eleent that was spliced state

  }


  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

    //

    //this makes sure that the this keyword will always be returned back to that clas

  }
// Everything inside of the render function gets re rendered every time react render again.
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      fontsize: '20px'
      //testing my commits 
    }

    let persons = null;

    if (this.state.showPersons){
      persons =(
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletPersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
             />
          })}
      </div>

      );
    }



    return (
      <div className="App">
        <h1>My react app!</h1>
        <p>:This is really working oh my god!!</p>
        <button
          onClick={this.togglePersonHandler}
          style={style}
        >Toggle Persons </button>
        {persons}
       
         </div>
    );
    // All elements that are lower case are resered for the native javascript variables
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi , im a react app!!!'))
  }
}


export default App;
