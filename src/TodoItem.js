import React, { Component } from 'react';


export default class TodoItem extends Component {

  state = {
    list : this.props.list,
    id: this.props.id
  }


    dragStart = (e) =>  {
    this.dragged = e.currentTarget;
      e.dataTransfer.effectAllowed = 'move';
    }

  dragEnd = (e) => {
    e.preventDefault();

    let parent = this._reactInternalFiber._debugOwner.stateNode;
    console.log("parent", parent);
    // access the state of parent
    let parentState = parent.state;
    // source has :  DOMStringMap {id: "3", type: "todo", elem: "falkdj"}
    let source = this.dragged.dataset;
    // list of elements
    let newList = this.state.list;
    // dest has destination where move the element.
    let dest = this.props.over;
    console.log("dest", dest.type);
    console.log("this.props",this.props);

    if (Object.keys(dest).length > 0) {
      if (dest.type !== this.state.id) {
          newList.splice(source.id, 1);
          this.setState({
            list: newList
          })

          let destList = parentState[dest.type];
          destList.splice(dest.id, 0, source.elem);
           let listKey = dest.type;
           console.log("listKey",listKey);
          parent.setState({
            listKey: destList
          })
          console.log("parnjer", parent.state.listKey);
      }
      else if (dest.type === this.state.id) {
          dest = this.over.dataset;
          newList.splice(source.id, 1);
          newList.splice(dest.id, 0, source.elem);
          this.setState({
            list: newList
          })
      }
  }
  }



  dragOver = (e) =>  {
  this.over = e.target;
  }

  render () {
    let  showingData = this.state.list.sort()
  return (
    <ul onDragOver={this.dragOver}>
      {showingData.map((item, index) =>  {
        return (
          <li data-id={index}
          data-type={this.state.id}
          data-elem={item}
          key={index}
          draggable="true"
          onDragEnd={this.dragEnd}
          onDragStart={this.dragStart}>
            {item}
          </li>
          )
        })}
    </ul>
  )
  }
  }
