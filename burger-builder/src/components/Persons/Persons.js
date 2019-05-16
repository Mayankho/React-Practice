import React from 'react';
import Person  from './Person/Person';

class Persons extends React.Component{
  constructor(props) {
    super(props);
    console.log('Persons.js inside of construtctor', props)
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
    console.log("Persons  indside of component will mount");
  }

  componentDidMount() {
    console.log('Persons is in component did mount');
  }

  componentWillReceiveProps(nextProp){
    console.log(" [!Update!] Person.js, Inside of componentWillRecieveProps")
  }

  shouldComponentUpdate(nextProps, nextState){
   //I predict his code is not going to work  
   console.log("It's' going to update because props is a different object!!!")
      return nextProps.persons !== this.props.person;
    }


    componentWillUpdate(nextProps, nextState){
      console.log("Person.js will update", nextProps, nextState)
    }

    componentDidUpdate(){
      console.log('Person.js has Updated')
    }

   


    //CDU --> This doesn't recieve the new props and the new state because it has already updateed already.
    //What object is props from either and both sides why, does clickin it make it work?
    // Every time you click and update it will forward, person.js in a new render
  

  render(){
    console.log('Persons.js has been rendered again')
    return this.props.persons.map( (person ,index ) => {
      return <Person
      click={() => this.props.clicked(index)}
      name = {person.name}
      age= {person.age}
      key = {person.id}
      changed = {(event) => this.props.changed(event, person.id)} />
    })
  }
}  




export default Persons; //export defaulut you idiot!