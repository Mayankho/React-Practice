import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
import Aux from '../components/hoc/Auxilary';
import withClass from '../components/hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
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
      showPersons: false,
      toggleClicked: 0, 
      authenticated : false
    }
  }
  

  componentWillMount() {
    console.log("App.js will mount");
  }

  componentDidMount() {
    console.log('App.js has been mounted');
  }

  //  shouldComponentUpdate(nextProps, nextState){
  //  console.log("[App.js] Inside shouldComponentUpdate",nextProps,nextState)a
  //     return nextState.persons !== this.state.persons || 
  //     nextState.showPersons !== this.state.showPersons ||
  //     nextProps.clicked !== this.props.clicked;
  //     // This checks if there is a difference 
  //     // between the two and returns it if it remains true that something has changed
  //     // If you remove a person it will run through the updating process.
  //   }
    componentWillUpdate(nextProps, nextState){
      console.log("[App.js] will update", nextProps, nextState)
    }

    componentDidUpdate(){
      console.log('[Appp.js] has Updated and is did Update')
    }


    static getDerivedStateFromProps(nextProps, prevState){
      console.log('Inside, getderivedstatefromprops', nextProps,prevState)
      // Called before render and good if you have something that needs to put props and state in sync
      return prevState;
    }

    getSnapshotBeforeUpdate(){
      //This is called before the dom gets updated componentUpdate
      //Good to save the scrolling postion of the user, good to put the user back in their scrollong position 
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


  // onChangeHandler
  // Questons? -> It's returning the id before, app.js gets a chance to get rendered again.

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      console.log(id, "is this getting renderes  before app.js?")
      return p.id === id;
      
    });

    
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    //Need to  assign the linked list to the first of it's kind in the  matrix, and let the thing copy itself
     
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
    this.setState( (prevState,props) => { 
      return {
        showPersons: !doesShow,
      toggleClicked: prevState.toggleClicked +1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});

  }


  render() {
    console.log('App.js has been rendered!');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
      );
    }

    return (
      // Use a higher order component, to get the classes app.
      <Aux>
        <button onClick = {() => {this.setState({showPersons: true})}}
      className = 'showPersons'
      >Show Persons</button>
        <Cockpit showPersons={this.state.showPersons}
          appTitle={this.props.title}
          login={this.loginHandler}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.authenticated} >{persons}</AuthContext.Provider>
        
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
