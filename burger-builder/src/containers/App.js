import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js is inside the constructor, props is in the bottom', props)
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
    console.log("App.js will mount");
  }

  componentDidMount() {
    console.log('App.js has been mounted');
  }

   shouldComponentUpdate(nextProps, nextState){
   console.log("[App.js] Inside shouldComponentUpdate",nextProps,nextState)
      return nextState.persons !== this.state.persons || 
      nextState.showPersons !== this.state.showPersons
    }
    componentWillUpdate(nextProps, nextState){
      console.log("[App.js] will update", nextProps, nextState)
    }

    componentDidUpdate(){
      console.log('[Appp.js] has Updated and is didUpdate')
    }

  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Max', age: 28 },
  //     { id: 'vasdf1', name: 'Manu', age: 29 },
  //     { id: 'asdf11', name: 'Stephanie', age: 26 }
  //   ]
  //   otherState: 'some other value',
  //   showPersons: false
  // }


  //onChangeHandler
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
      
    });

    //Questons? -> It's returning the id before, app.js gets a chance to get rendered again.
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  } 
  //End 
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

      //make a new variable persons, with all the persons on the state 
      //then use splice in the array,takes in person Index and one
    persons.splice(personIndex, 1);
      //then it sets state with the new state, and then state i updated
    this.setState({ persons: persons });
  }
  // This function acts as a on and off switch.  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  // So what we have is person  being  called on first then you haave the cockpit coming in hot in the second place

  render() {
    console.log('App.js has been rendered!');
    let persons = null;


    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={classes.App}>
      <button onClick = {() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit showPersons={this.state.showPersons}
          appTitle={this.props.title}

          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
