import React, { Component } from 'react';

import './tasks-list.scss';
import TaskComponent from "../task";


class TasksList extends Component {

  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({
      items: this.props.items
    })

  }

  componentDidUpdate() {
    if (this.state.items !== this.props.items) {
      this.setState({
        items: this.props.items
      })
    }
  }

  render() {

    let empty;
    if (!this.state.items.length) {
      empty = 'Добавьте новое мероприятие!'
    }

    return (
       <div className="task-list">
         {empty}
          <ul>
            {this.state.items.map((item, key) => {
              return (
                <li key={key} >
                  <TaskComponent task={item}/>
                </li>
              )
            })}
          </ul>
        </div>
    )
  }

}

export default TasksList;
