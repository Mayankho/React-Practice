import React from 'react';
import Person  from './Person/Person';

class Persons extends React.Component{
  constructor(props) {
    super(props);
    console.log('Persons.js inside of construtctor', props)
    this.lastPersonRef =  React.createRef();
  }
  
  componentWillMount() {
    console.log("Persons  indside of component will mount");
  }

  componentDidMount() {
    console.log('Persons is in component did mount');
    // this.lastPersonRef.current.focus();  
  }

  componentWillReceiveProps(nextProp){
    console.log(" [!Update!] Person.js, Inside of componentWillRecieveProps")
  }

  shouldComponentUpdate(nextProps, nextState){
   console.log("It's' going to update because props is a different object!!!")
      return nextProps.persons !== this.props.person || 
      nextProps.changed !== this.props.changed || 
      nextProps.clicked !== this.props.clicked;
      // return true; this is giving a standard for what nees to be true for state to update 
    } 

    componentWillUpdate(nextProps, nextState){
      console.log("Person.js will update", nextProps, nextState)
    }

    componentDidUpdate(){
      console.log('Person.js has Updated')
    }

   


    //CDU --> This doesn't recieve the new props and the new state because it has already updateed already.
    // With every new change there will bean new render.
  

  render(){
    
    return this.props.persons.map( (person ,index ) => {
      
      return (
        console.log(person, index, 'This is what is inside of the persons map and parameters'),

        <Person
      
      click={() => this.props.clicked(index)}
      name = {person.name}
      age= {person.age}
      ref = {this.lastPersonRef}
    
      key = {person.id}
      changed = {(event) => this.props.changed(event, person.id)} />

      ) 
    });
  }

}  

export default Persons; 