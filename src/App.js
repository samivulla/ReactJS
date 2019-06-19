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

  switchNameHandler = () => {
    console.log('Was Clicked!');
    this.setState({
      persons: [
        {name:'Samivulla', age:'28'},
        {name:'test', age:'29'},
        {name: 'Samivulla', age:'25'}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, My React application</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Playing cricket </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
