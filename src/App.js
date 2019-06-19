import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name:'Max', age:'28'},
      {name:'Manu', age:'29'},
      {name: 'Samivulla', age:'25'}
    ]
  }

  switchNameHandler = (dynamicName) => {
    console.log('Was Clicked!');
    this.setState({
      persons: [
        {name:dynamicName, age:'28'},
        {name:'test', age:'29'},
        {name: 'Samivulla', age:'25'}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:'sami', age:'28'},
        {name:event.target.value, age:'29'},
        {name: 'Samivulla', age:'25'}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, My React application</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler.bind(this, 'sami')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}>My Hobbies: Playing cricket </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} clicktest={this.switchNameHandler.bind(this, 'focus')}></Person>
      </div>
    );
  }
}

export default App;
