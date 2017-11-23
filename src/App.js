import React, { Component } from 'react';



let intialTasks = [
    'project 1',
    'project 2'
   ];

export default class App extends Component {

  state = {
    todo:intialTasks,
    newItem:''
  }


    handleChange = (newItem) => {
      this.setState({newItem})
    }

    updateItem = (newItem) => {
      this.state.todo.push(this.state.newItem)
          this.setState({newItem:''})
     }

    handleKeyPress = (event) => {
      if(event.key === 'Enter'){
          this.updateItem()
      }
    }

  render() {
    let showingData = this.state.todo.sort()
    console.log(showingData);

    return (
      <div className="App" align='center'>
        <h1>Jio Todo</h1>
        <input
         type = 'text'
         value = {this.state.newItem}
         onChange = { (event) => this.handleChange(event.target.value)}
         onKeyPress = { this.handleKeyPress}
        />
       {showingData.map((todo, index) => <p key = { index }>{ todo}</p>) }
      </div>
    );
  }
}
