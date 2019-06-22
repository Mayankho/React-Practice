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

/*
  {this.state.persons.map (person => {
    return (
      <Person name = {person.name} 
      age = {person.age}
       />
       How does map work again?. It maps all  the data of one array into a new array, by asking for arbitit parameter then using that parameter to act as the anchor in the map functino
       So i am getting an object back from my map, and the index as well as getting back my comments.
       It doesn't seem as though i am gettingg back a array of  objuects but  at least getting aone object at a time insteaad
  })}
 */




export default Persons; 