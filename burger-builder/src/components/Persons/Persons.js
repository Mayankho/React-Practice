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
  render(){
    console.log('Person.js inside render')
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


//Close the fucking tag jesus christ 

export default Persons; //export defaulut you idiot!