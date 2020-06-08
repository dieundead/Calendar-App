import React, { Component } from 'react';

import './task.scss';

class TaskComponent extends Component {

  constructor() {
    super();
    this.state = {
       day: ''
    };
  }

  componentDidMount() {
      this.getDate(this.props.task.date);
  }

  getDate(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const day = date.getDate() + ' ' + months[date.getMonth()];
    this.setState({ day });
  }

  render() {
      let classNames = 'task';
      if(this.props.task.category=== 'events'){
          classNames+=' events-style'
      }
      if(this.props.task.category=== 'reminders'){
          classNames+=' reminders-style'
      }
      if(this.props.task.category=== 'birthdays'){
          classNames+=' birthdays-style'
      }
      if(this.props.task.category=== 'holidays'){
          classNames+=' holidays-style'
      }

      return (
          <span className={classNames}>
          <div className="task-wrapper">
              <span className="task-date">{this.state.day}</span>
              <h5 className="task-time" > {this.props.task.time}</h5>
              <span className="task-name">{this.props.task.title}</span>

          </div></span>
      );
  }

}

export default TaskComponent;
