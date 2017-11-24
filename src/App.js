import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class App extends Component {

  state = {
    projects : [],
    todo : [],
    progress : [],
    done : [],
    newItem : '',
    mainover: {},
  }


    handleChange = (newItem) => {
      this.setState({newItem})
    }

    updateItem = (newItem) => {
      this.state.todo.push(this.state.newItem)
      this.state.projects.push(this.state.newItem)
          this.setState({newItem:''})
     }

    handleKeyPress = (event) => {
      if(event.key === 'Enter'){
          this.updateItem()
      }
    }

    dragOver = (e) => {
      this.setState({
        mainover : e.target.dataset
      });
        }



  render() {
      return (
      <div>
      <div className="header container-fluid">
        <div >
              <h1> Jio Task Management </h1>
        </div>
      </div>
      <div className="count-bar total">
        {this.state.projects.length} <br/> Projects
      </div>
      <div className="container">

        <label>Add Project</label>
        <input
         type = 'text'
         placeholder = 'Enter project'
         value = {this.state.newItem}
         onChange = { (event) => this.handleChange(event.target.value)}
         onKeyPress = { this.handleKeyPress}
        />
        </div>


         <div className='container'>
           <div onDragOver={this.dragOver}>
               <div className='row'>
                 <div className="todo block">
                   <div className="block-header">
                     <h4 data-type="todo">To do </h4>
                     <div className="count-bar">{this.state.todo.length} <br/> PROJECTS</div>
                   </div>
                   <div className="block-body">
                     <TodoItem
                        list={this.state.todo}
                        over={this.state.mainover}
                       id="todo" />
                    </div>
                 </div>
               </div>
               <div  className = 'col2'data-type="progress">
               <div>
                 <div className=" block" data-type="progress">
                     <div className="block-header" data-type="progress">
                       <h4 data-type="progress">  InProgress </h4>
                       <div className="count-bar" data-type="progress">{this.state.progress.length} <br/> PROJECTS</div>
                     </div>
                     <div className="block-body" data-type="progress">
                      <TodoItem
                         list={this.state.progress}
                          over={this.state.mainover}
                         id="progress" />
                     </div>
                 </div>
               </div>
               </div>
               <div  className='col3' data-type="done">
                 <div className=" block" data-type="done">
                     <div className="block-header" data-type="done">
                       <h4 data-type="done">  Done </h4>
                       <div className="count-bar" data-type="done">{this.state.done.length} <br/> PROJECTS</div>
                     </div>
                     <div className="block-body" data-type="done">

                       <TodoItem
                         list={this.state.done}
                          over={this.state.mainover}
                         id="done" />

                     </div>
                 </div>
               </div>
           </div>
      </div>
      </div>

    );
  }
}
