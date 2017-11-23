import React, { Component } from 'react';
import Draggable from 'react-draggable';



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
    console.log(showingData.length);

    return (
      <div className="App" align='center'>
        <h1>Jio Todo</h1>
        <p>total: {showingData.length} projects </p>
        <input
         type = 'text'
         value = {this.state.newItem}
         onChange = { (event) => this.handleChange(event.target.value)}
         onKeyPress = { this.handleKeyPress}
        />
         <div>
         <table>
         <thead>
         <tr>
         <td>Todolist</td>
         <td>InProgress</td>
         <td>Done</td>
         </tr>
         </thead>
          <tbody>
          {showingData.map((todo, index) =>
            <Draggable>
            <li key = { index }>
             { todo }</li>
            </Draggable>) }
          </tbody>



         </table>
         </div>
      </div>
    );
  }
}
