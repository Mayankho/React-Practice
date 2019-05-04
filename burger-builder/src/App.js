import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id : 1,name: 'Max', age: 28 },
      { id : 2,name: 'Yankho', age: 22 },
      { id : 3,name: 'Stephanie', age: 26 }
    ],

    showPersons: false
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    }); //Find index function?

    const person = {...this.state.persons[personIndex]};

    person.name= event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // const person = Object.assign({}, this.state.persons[PersonIndex])

    this.setState({
      persons: persons
    })

  }

  deletPersonHandler = (personIndex) => {

    // const persons = this.state.persons.slice(); //This is only holding a pointer, did not set a new value, 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // This removes one element forom the array
    this.setState({persons : persons})// This was the one eleent that was spliced state

  }
// 

  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

    //

    //this makes sure that the this keyword will always be returned back to that clas

  }
// Everything inside of the render function gets re rendered every time react render again.
//Everything inside render gets shown on the view
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white' , 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    //If this is true then you will be able to see your people data
    


    if (this.state.showPersons){
      persons =(
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletPersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event, person.id)}
             />
          })}
      </div>
      );
   
      // this comes after you conditional so that is its true it  will be red
    }
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //Classes = ["red"], 

    }
    if (this.state.persons.length <= 1 ){
      assignedClasses.push(classes.bold) // Classes = ['red', 'bold']
    }

    return (
        <div className= {classes.App}>
        <h1>My react app!</h1>
        <p className = {assignedClasses.join(' ')}> It's alive</p> 
        <button
          onClick={this.togglePersonHandler}
          style={style}
        >Toggle Persons </button>
        {persons}
       
         </div>
      // Treat this as javascript this  is just an array, treat like an array
      //
      
    );
    // All elements that are lower case are resered for the native javascript variables
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi , im a react app!!!'))
  }

}


export default App;
