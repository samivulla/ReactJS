import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';
class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Max', age: '28' },
      { id:2, name: 'Manu', age: '29' },
      { id:3, name: 'Samivulla', age: '25' }
    ],
    showPersons: false
  }

  switchNameHandler = (dynamicName) => {
    this.setState({
      persons: [
        { name: dynamicName, age: '28' },
        { name: 'test', age: '29' },
        { name: 'Samivulla', age: '25' }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { 
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      // persons: [
      //   { name: 'sami', age: '28' },
      //   { name: event.target.value, age: '29' },
      //   { name: 'Samivulla', age: '25' }
      // ]
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deleteSelectedOne = (personIndex) => {
   const personsss = [...this.state.persons];
   personsss.splice(personIndex,1);
   this.setState({
     persons: personsss
   })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color:'black'
      }
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
            return <Person clicktest={() => this.deleteSelectedOne(index)} 
              name={person.name}
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event,person.id)}/>
            })
          }
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}>My Hobbies: Playing cricket </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} clicktest={this.switchNameHandler.bind(this, 'focus')}></Person> */}
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'pink',
        color:'black'
      }
    }

    let classes = ['red','bold'].join(' ');
    return (
      <div className="App">
        <h1>Hi, My React application</h1>
        <p className={classes}>This is working</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
